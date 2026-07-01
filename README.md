# Spur AI Chat Assistant

A full-stack AI-powered chat application built using React, Express, TypeScript, Prisma, PostgreSQL (Neon), and OpenAI.

---

## Features

- AI Chat Interface
- Conversation History
- Persistent Storage using PostgreSQL
- REST API
- Responsive UI
- Cloud Deployment

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite

### Backend

- Node.js
- Express
- Prisma ORM

### Database

- PostgreSQL (Neon)

### AI

- OpenAI API

### Deployment

- Vercel
- Render

---

## Folder Structure

```
spur-ai-chat
│
├── frontend/
├── backend/
└── README.md
```

---

## Local Setup

### Backend

```bash
cd backend
npm install
npx prisma migrate deploy
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## Environment Variables

```
DATABASE_URL=
OPENAI_API_KEY=
PORT=
```

---

## API Endpoints

### Health

```
GET /health
```

### Send Message

```
POST /api/chat/message
```

### Chat History

```
GET /api/chat/:sessionId
```

---

## Live Demo

Frontend

```
https://spur-ai-chat-eight.vercel.app
```

Backend

```
https://spur-ai-chat-backend-nsin.onrender.com
```

---

## Author

Pratyush
