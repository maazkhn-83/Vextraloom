import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import contactRouter from './routes/contact.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const app = express();
const PORT = process.env.PORT || 3001;

app.set('trust proxy', 1); // Replit / cloud proxies: correct client IP for rate limiting

app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'default-src': ["'self'"],
        'script-src': ["'self'"],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        'img-src': ["'self'", 'data:', 'blob:'],
        'connect-src': ["'self'"],
        'frame-ancestors': ["'self'"],
        'upgrade-insecure-requests': null,
      },
    },
  })
);

const allowedOrigins = (process.env.CLIENT_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);
app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : false }));
app.use(express.json({ limit: '10kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, db: mongoose.connection.readyState === 1 });
});
app.use('/api/contact', contactRouter);
app.use('/api', (_req, res) => res.status(404).json({ success: false, message: 'Not found.' }));

// Production: serve the built React app with an SPA fallback
const dist = path.resolve(__dirname, '../../client/dist');
if (fs.existsSync(path.join(dist, 'index.html'))) {
  app.use(
    express.static(dist, {
      index: false,
      maxAge: '1d',
      setHeaders: (res, file) => {
        if (file.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');
      },
    })
  );
  app.get('*', (_req, res) => res.sendFile(path.join(dist, 'index.html')));
}

// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  if (err?.type === 'entity.parse.failed' || err?.type === 'entity.too.large') {
    return res.status(400).json({ success: false, message: 'Invalid request.' });
  }
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, message: 'Something went wrong on our side.' });
});

async function connectDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('[db] MONGODB_URI is not set - submissions will be emailed but not stored.');
    return;
  }
  try {
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 8000 });
    console.log('[db] MongoDB connected');
  } catch (err) {
    console.error('[db] MongoDB connection failed:', err.message, '- retrying in 30s');
    setTimeout(connectDb, 30000).unref();
  }
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[server] listening on 0.0.0.0:${PORT}`);
  connectDb();
});
