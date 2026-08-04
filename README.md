# A Coder's Diary

A React and Firebase frontend for recording, publishing, and rediscovering solutions to everyday development problems.

[![Live site](https://img.shields.io/badge/Live-Firebase-ffca28?logo=firebase&logoColor=black)](https://a-coders-diary.web.app/)

[Live site](https://a-coders-diary.web.app/) · [Backend repository](https://github.com/montasim/a-coders-diary-server)

> The Firebase-hosted frontend returned `200 OK` when checked on 4 August 2026. Its data requests still target `a-coders-diary.herokuapp.com`, a legacy backend address; posts, profiles, and dashboard features may fail if that service is unavailable.

## The idea

Developers repeatedly search for fixes they have already discovered. A Coder's Diary turns those solutions into a personal, searchable publishing workflow with Markdown posts, author pages, tags, and an administration dashboard.

## Features

- Email/password and social authentication through Firebase
- Public post feed and post detail pages
- Markdown rendering with GitHub-flavored Markdown, tables, math, and embedded HTML
- Author and user profiles
- Create, edit, and delete post workflows
- Tag management
- User and administrator management
- Responsive Tailwind CSS and daisyUI interface
- Firebase Hosting configuration

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 18, Create React App |
| Routing | React Router 6 |
| Authentication | Firebase Authentication, React Firebase Hooks |
| Content | React Markdown, remark/rehype plugins |
| Styling | Tailwind CSS, daisyUI |
| Notifications | React Toastify |
| Hosting | Firebase Hosting |

## Quick start

### Prerequisites

- Node.js and npm compatible with Create React App 5
- A Firebase web application
- A compatible A Coder's Diary backend

### Configure Firebase

Create an untracked `.env.local`:

```dotenv
REACT_APP_apiKey=<firebase-api-key>
REACT_APP_authDomain=<project>.firebaseapp.com
REACT_APP_projectId=<project-id>
REACT_APP_storageBucket=<project>.appspot.com
REACT_APP_messagingSenderId=<sender-id>
REACT_APP_appId=<app-id>
```

Firebase web configuration identifies the client project; security still depends on Firebase rules and server-side authorization.

### Install and run

```bash
git clone https://github.com/montasim/a-coders-diary.git
cd a-coders-diary
npm install
npm start
```

The Create React App development server normally opens `http://localhost:3000`.

## Backend dependency

API URLs are hard-coded throughout `src/` to the historical Heroku service. To use another backend, replace those origins or introduce a single environment-based API client, for example:

```dotenv
REACT_APP_API_BASE_URL=http://localhost:5000
```

The current code does not yet read that variable; centralizing the API base URL is a recommended first refactor.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Public post feed |
| `/post-details/:_id` | Read a post |
| `/author-details/:authorEmail` | View an author |
| `/dashboard/*` | Posts, tags, users, and administrators |
| `/about`, `/contact` | Portfolio and contact pages |
| `/login`, `/signup` | Authentication |
| `/profile` | Current user profile |

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server |
| `npm run build` | Create a production build |
| `npm test` | Start the CRA test runner |
| `npm run eject` | Permanently expose CRA configuration |

## Project structure

```text
src/
├── Components/        # Shared navigation, footer, and auth UI
├── Hooks/             # Firebase initialization and reusable hooks
├── Pages/
│   ├── Home/          # Public post listing
│   ├── Dashboard/     # Posts, tags, users, and admin screens
│   ├── Login/         # Authentication flows
│   └── User/          # Profile
├── App.js             # Route map
└── index.js           # BrowserRouter entry point
```

## Deployment

```bash
npm run build
firebase deploy
```

Deploying the static client does not deploy or repair the separate backend.

## Current limitations

- The hard-coded Heroku API origin is a single point of failure and may be retired.
- There is no CI workflow and no meaningful application test suite beyond CRA scaffolding.
- The project uses 2022-era dependencies and should be audited before active development.
- Role and ownership enforcement must be guaranteed by the backend, never only by hidden UI.
- Raw HTML rendering in Markdown requires careful server-side sanitization and content policy.
- The repository has no root license file.

## Contributing and security

Use [GitHub Issues](https://github.com/montasim/a-coders-diary/issues) for reproducible bugs. Report authentication, authorization, or content-injection vulnerabilities privately to the maintainer.

## Support

If the project or its source is useful, you can [support the maintainer on SupportKori](https://www.supportkori.com/montasim).

## License status

No license file is present. Unless a license is added, the code is available for viewing but reuse requires permission from the copyright holder.
