# Medienfachfrau Learning Hub

Modern personal learning app for **Medienfachfrau - Grafik, Print, Publishing und audiovisuelle Medien**.

The interface is Ukrainian by default. Learning content includes German and English material for LAP/Fachgespräch and real client projects.

## Features

- Next.js App Router, TypeScript and Tailwind CSS.
- Firebase Google Authentication.
- Cloud Firestore per-user learning data.
- Firebase Storage for sketches, PDFs, SVG, ZIP, AI/EPS project files.
- Autosave with debounce and visible save status.
- Dashboard, modules, Fachwörter, LAP, projects, portfolio, time tracking, notes, tests and settings.
- 16 module structure with a detailed Module 1: **Lune Bakery**.
- 40+ German Fachwörter with articles, plural forms, UA/EN translations, simple German explanations and examples.
- Research table, moodboard, file uploads, deliverables, quality checklist and quiz.
- Export/import JSON backup, vocabulary CSV, module PDF and client ZIP metadata.
- Light and dark theme.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Firebase Setup

1. Create a Firebase project.
2. Open **Authentication**.
3. Enable **Google** as a sign-in provider.
4. Open **Firestore Database** and create a database.
5. Open **Storage** and create a bucket.
6. Copy `.env.example` to `.env.local`.
7. Fill the values from Firebase project settings:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Firestore Structure

```text
users/{userId}
users/{userId}/modules/{moduleId}
users/{userId}/modules/{moduleId}/tasks/{taskId}
users/{userId}/vocabulary/{wordId}
users/{userId}/phrases/{phraseId}
users/{userId}/notes/{noteId}
users/{userId}/timeEntries/{entryId}
users/{userId}/quizResults/{resultId}
users/{userId}/files/{fileId}
users/{userId}/selfAssessments/{assessmentId}
users/{userId}/competitors/{competitorId}
users/{userId}/moodboard/{itemId}
```

Each document stores `userId`, `createdAt`, `updatedAt` and `moduleId` where needed.

## Security Rules

Use:

```text
firebase/firestore.rules
firebase/storage.rules
```

They block public access and allow a user to read/write only their own documents and files.

## Firebase Indexes

Use:

```text
firebase/indexes.json
```

The app mainly needs ordering by `number` for modules and `updatedAt` for personal collections.

## Deploy to Vercel

1. Push this folder to GitHub.
2. In Vercel, create a new project.
3. If this is a monorepo, set the root directory to:

```text
medien-learning-hub
```

4. Add all Firebase values as Environment Variables.
5. Deploy.

## Important

The app does not use fake authentication. If Firebase environment variables are missing, it shows a setup screen instead of a fake login.
