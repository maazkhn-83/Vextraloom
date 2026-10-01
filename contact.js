import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';
import { sendContactEmail } from '../utils/mailer.js';
import { validateContact } from '../utils/validate.js';

const router = Router();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages from this connection. Please wait a few minutes or reach us on WhatsApp.' },
});

async function saveToDb(doc) {
  if (mongoose.connection.readyState !== 1) throw new Error('MongoDB not connected');
  return Contact.create(doc);
}

router.post('/', limiter, async (req, res) => {
  // Honeypot: bots fill the hidden field. Pretend success, do nothing.
  if (req.body && req.body.hp) return res.json({ success: true, message: 'Thank you! Your message has been sent.' });

  const { data, errors } = validateContact(req.body);
  if (errors) return res.status(400).json({ success: false, message: 'Please check the highlighted fields.', errors });

  const meta = { ip: req.ip || '', userAgent: (req.get('user-agent') || '').slice(0, 300) };
  const [mail, db] = await Promise.allSettled([sendContactEmail(data), saveToDb({ ...data, ...meta })]);

  if (mail.status === 'rejected') console.error('[contact] email failed:', mail.reason?.message || mail.reason);
  if (db.status === 'rejected') console.error('[contact] db save failed:', db.reason?.message || db.reason);

  if (mail.status === 'rejected' && db.status === 'rejected') {
    return res.status(502).json({
      success: false,
      message: 'We could not deliver your message right now. Please try again shortly or message us on WhatsApp.',
    });
  }
  return res.json({
    success: true,
    message: 'Thank you! Your message has been sent. We will reply soon.',
    delivered: { email: mail.status === 'fulfilled', saved: db.status === 'fulfilled' },
  });
});

export default router;
