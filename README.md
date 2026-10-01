# VEXTRALOOM website (MERN)

A premium, animated agency website. **Client:** React + Vite + React Router + Framer Motion + react-helmet-async.
**Server:** Node + Express + Mongoose + Nodemailer. In production Express serves `client/dist` with an SPA fallback.

```
client/            React app (src/pages, src/components, src/data, src/config, src/styles)
  public/          logo-transparent.png, favicons, og-image, assets/{web,logos,social}
server/            Express API (POST /api/contact, GET /api/health)
.env.example       every environment variable, documented
.replit            one-click Run configuration
```

## Run on Replit
1. Upload / import this folder as a Replit project.
2. Open **Secrets** and add the variables below. Never put them in frontend code.
3. Press **Run**. This executes `npm run dev`: the server starts on `PORT` (default 3001), Vite starts on 5173 and proxies `/api` to the server.

Replit's first run executes `npm install` for both workspaces automatically; if it does not, run `npm install` in the Shell.

## Environment variables
| Variable | Purpose |
|---|---|
| `MONGODB_URI` | MongoDB connection string (Atlas works). Optional: without it, messages are emailed but not stored. |
| `EMAIL_USER` | Gmail address that sends the notification email. |
| `EMAIL_APP_PASSWORD` | Google **App Password** for that account (needs 2-Step Verification). Not your normal password. |
| `EMAIL_TO` | Where enquiries are delivered. Defaults to `vextraloomhello@gmail.com`. |
| `PORT` | Express port. Default 3001 in development. Do not use 5173. |
| `CLIENT_ORIGIN` | Optional. Comma-separated origins allowed by CORS if the frontend is on another domain. |

Local use: copy `.env.example` to `.env` (project root), fill it in, then `npm install` and `npm run dev` (open http://localhost:5173).

## Scripts (root)
- `npm run dev` runs server and client together.
- `npm run build` builds the client into `client/dist`.
- `npm start` starts Express (serves the built client plus the API). Set `NODE_ENV=production`.

## Contact form behaviour
`POST /api/contact` validates and sanitises input, rejects bots with a honeypot field, is rate limited (8 per 15 minutes per IP), then **sends the email and saves to MongoDB independently**. If one fails the other still happens; only if both fail does the visitor see an error. Security middleware: helmet (with a CSP allowing Google Fonts), CORS, 10 kb body limit.

## Deploying
**Replit Deployments:** build `npm install && npm run build`, run `NODE_ENV=production npm run start` (already in `.replit`). Make sure the port your server listens on is the one mapped to external port 80 in `.replit` (set the `PORT` secret to match).
**Any Node host (Render, Railway, VPS):** run `npm install && npm run build`, then `NODE_ENV=production npm start` with the environment variables set. The host's `PORT` is used automatically.

## Editing content
Everything editable lives in `client/src/data` and `client/src/config`:
- `config/site.js`: WhatsApp, email, Instagram, Facebook and **`LINKEDIN_URL`** (paste your URL; the icon and contact card appear automatically while it is non-empty).
- `data/services.js`: all 9 services (copy, offerings, process, FAQ, accent colour).
- `data/web.js`: website mockups + "why a website matters" content. `data/logos.js`, `data/social.js`: portfolio images.
- `data/content.js`: home "why choose us", process and About page copy.

### Images
Drop files into `client/public/assets/{web,logos,social}/` with the names used in the data files, then add or uncomment an entry (include the image's real `width` and `height`). A missing file shows a designed gradient card instead of a broken image. Website screenshots should be tall full-page captures.

## Brand assets
`client/public/logo-transparent.png` is the VEXTRALOOM mark with a transparent background (keyed out from the supplied white-background file). Favicons (`favicon.ico`, 16/32, `apple-touch-icon.png`, `icon-192/512.png`) and `og-image.png` are generated from it. After deployment, set absolute URLs for `og:image` in `client/index.html` if you want social-sharing previews to work everywhere.
