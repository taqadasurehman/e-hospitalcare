# e-HospitCare

Hospital management system (React + Vite frontend, Express + MongoDB backend).

## Run locally

1. Start MongoDB (for example with Docker):
   ```
   docker run -d --name ehospitcare-mongo -p 27017:27017 -v ehospitcare-mongo-data:/data/db mongo:7
   ```
2. Backend:
   ```
   cd backend
   cp .env.example .env
   npm install
   npm run dev
   ```
3. Frontend (in another terminal):
   ```
   cd client
   cp .env.example .env
   npm install
   npm run dev
   ```
   Open http://localhost:5173

4. Demo data (with the backend running):
   ```
   cd backend
   npm run seed
   ```

To create an admin account:
```
cd backend
node -e "require('./startup')('Admin','admin@hospital.com','admin','Admin','Hospital','03000000000','password')"
```

## Configuration

- `backend/.env`: `PORT`, `MONGO_URI`, `JWT_SECRET`
- `client/.env`: `VITE_API_URL` (backend URL)
