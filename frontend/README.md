# NariFinance Frontend

A fun, gamified financial literacy app (like Duolingo) for women.

## Tech
- React + Vite + TypeScript
- Tailwind CSS
- React Router
- i18next (EN/HI)
- Zustand
- Firebase (Auth, Firestore) [mocked in UI for local demo]
- PWA (offline-ready skeleton)

## Getting started

1. Install deps
```
npm install
```

2. Run dev server
```
npm run dev
```

3. Build
```
npm run build
```

## Env vars (optional if you later wire Firebase Auth)
Create `.env` with:
```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Features
- Colorful, friendly UI
- Modules, Quizzes, Games, Leaderboard, Forum, Resources, Profile
- Language switcher (EN/Hindi)
- Audio narration toggle (uses browser speech synthesis)
- Gamification: points, badges (demo flow)
