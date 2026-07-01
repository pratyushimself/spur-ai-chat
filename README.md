# Spur AI Chat Assistant

A full-stack AI chat application built as part of the Spur AI Backend Engineer Assignment.

## Features

- AI-powered chat assistant
- Conversation history persistence
- Session-based conversations
- PostgreSQL database
- Prisma ORM
- Express + TypeScript backend
- React + Vite frontend
- OpenAI integration
- Input validation using Zod
- Repository-Service architecture

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite

## Backend

- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL

## AI

- OpenAI API

---

# Project Structure

backend/
- controllers
- services
- repositories
- routes
- middleware
- prisma
- prompts

frontend/
- components
- pages
- services

---

# Installation

## Clone Repository

```bash
git clone <repository-url>
cd spur-ai-chat
```

## Backend

```bash
cd backend
npm install
```

Create a `.env` file.

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/spur_ai_chat
PORT=3000
OPENAI_API_KEY=your_api_key
```

Run migrations

```bash
npx prisma migrate dev
```

Start server

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# API Endpoints

## Health Check

GET

```
/health
```

---

## Send Message

POST

```
/api/chat/message
```

Body

```json
{
    "sessionId":"test-session",
    "message":"Hello"
}
```

---

## Conversation History

GET

```
/api/chat/:sessionId
```

---

# Architecture

React

↓

Express

↓

Controller

↓

Service

↓

Repository

↓

Prisma

↓

PostgreSQL

↓

OpenAI

---

# Design Decisions

- Repository Pattern
- Service Layer
- Prisma ORM
- PostgreSQL for persistence
- Session-based conversation management
- Zod request validation

---

# Error Handling

- Empty message validation
- Maximum message length validation
- Missing API key handling
- OpenAI API failure handling
- Database error handling

---

# Future Improvements

- Streaming AI responses
- Authentication
- Conversation management
- Markdown rendering
- Unit and integration testing

---

# Author

Pratyus Pradhan