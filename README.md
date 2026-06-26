# PopX App

A React JS implementation of the PopX mobile app design — built as an internship qualifier assignment.

## Screens

1. **Welcome** — Landing screen with decorative dots, CTA buttons
2. **Create Account** — Registration form with validation
3. **Login** — Sign-in screen with dynamic button state
4. **Account Settings** — User profile page

## Tech Stack

- React 18
- React Router DOM v6
- Plain CSS (no UI libraries)
- Inter font (Google Fonts)

## Getting Started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Build for Production

```bash
npm run build
```

## Navigation Flow

```
Welcome
  ├── Create Account → Account Settings
  └── Login → Account Settings
```

## Deployment

Deployed on Vercel. `vercel.json` handles client-side routing.
