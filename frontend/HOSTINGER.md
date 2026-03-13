# Hostinger deployment

This frontend can be deployed to Hostinger as a static React site.

## 1. Build locally

```bash
cd frontend
npm install
cp .env.production.example .env.production
npm run build
```

If your backend URL changes, update `VITE_API_BASE_URL` in `.env.production` before building.

## 2. Upload to Hostinger

Upload the contents of `frontend/dist/` into your domain's `public_html/` directory.

Important:
- Upload the generated `.htaccess` file too.
- Do not upload the `dist` folder itself inside `public_html`; upload its contents.

## 3. Domain routing

The included `.htaccess` file rewrites requests to `index.html`, which is required for routes like:
- `/menu`
- `/menu/flavours`
- `/contact`
- `/franchizy`

## 4. Backend

The franchise inquiry form currently sends requests to:

`https://jasperwings.onrender.com/api/v1/franchise-inquiry`

If you later move the backend, rebuild the frontend with the new `VITE_API_BASE_URL`.
