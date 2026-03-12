# Modern Modular Portfolio (2026)

A complete full-stack portfolio system built with React (Vite), TailwindCSS, Framer Motion, Node/Express, and MongoDB.

## Project Structure

- `frontend/` React + Vite + Tailwind + Framer Motion
- `backend/` Express + MongoDB REST API

## Frontend Setup

1. `cd frontend`
2. `npm install`
3. Create `.env` based on `.env.example` and set `VITE_API_URL`
4. `npm run dev`

## Backend Setup

1. `cd backend`
2. `npm install`
3. Create `.env` based on `.env.example`
4. `npm run dev`

## API Endpoints

- `POST /api/contact` Submit contact form
- `GET /api/projects` List projects
- `GET /api/projects/:id` Project details
- `GET /api/blogs` List blogs
- `GET /api/blogs/:id` Blog details
- `POST /api/auth/login` Admin login (JWT)
- `POST /api/admin/projects` Add project (JWT required)
- `POST /api/admin/blogs` Add blog (JWT required)
- `GET /api/admin/messages` View messages (JWT required)

## Deployment

### Frontend ? Vercel

1. Push the repo to GitHub.
2. Create a new Vercel project.
3. Set root directory to `frontend`.
4. Add env var `VITE_API_URL` to your Render backend URL.
5. Deploy.

### Backend ? Render

1. Create a new Web Service.
2. Set root directory to `backend`.
3. Build command: `npm install`
4. Start command: `npm start`
5. Add env vars from `backend/.env.example`.

### Database ? MongoDB Atlas

1. Create a new Atlas cluster.
2. Whitelist Render IPs or allow `0.0.0.0/0` for testing.
3. Create a DB user and copy your connection string to `MONGO_URI`.

## Admin Dashboard

Visit `/admin` on the frontend.
Use `ADMIN_EMAIL` and `ADMIN_PASSWORD` from your backend `.env`.

## Notes

- Replace `resume.pdf` in `frontend/public/`.
- Update `frontend/src/data.js` for default content.
- Use the admin panel to insert projects/blogs/messages stored in MongoDB.
