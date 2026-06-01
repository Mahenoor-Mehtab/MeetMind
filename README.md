<div align="center">
<br />

```
███╗   ███╗███████╗███████╗████████╗███╗   ███╗██╗███╗   ██╗██████╗ 
████╗ ████║██╔════╝██╔════╝╚══██╔══╝████╗ ████║██║████╗  ██║██╔══██╗
██╔████╔██║█████╗  █████╗     ██║   ██╔████╔██║██║██╔██╗ ██║██║  ██║
██║╚██╔╝██║██╔══╝  ██╔══╝     ██║   ██║╚██╔╝██║██║██║╚██╗██║██║  ██║
██║ ╚═╝ ██║███████╗███████╗   ██║   ██║ ╚═╝ ██║██║██║ ╚████║██████╔╝
╚═╝     ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═════╝ 
```

### 🤖 AI-Powered Video Call Platform with Real-Time Agents & Smart Transcripts

**Start a call. Let AI handle the rest — summaries, transcripts, Q&A, and more.**

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-Integrated-412991?style=for-the-badge&logo=openai)](https://openai.com/)
[![Stream](https://img.shields.io/badge/Stream-Video+Chat-005FFF?style=for-the-badge)](https://getstream.io/)
[![Polar](https://img.shields.io/badge/Polar-Subscriptions-6366F1?style=for-the-badge)](https://polar.sh/)
[![Better Auth](https://img.shields.io/badge/Better_Auth-Login-FF6B6B?style=for-the-badge)](https://better-auth.com/)
[![Inngest](https://img.shields.io/badge/Inngest-Background_Jobs-8B5CF6?style=for-the-badge)](https://inngest.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

<br />

[🚀 Live Demo](#) · [📖 Documentation](#) · [🐛 Report Bug](#) · [💡 Request Feature](#)

<br />
</div>

---

## 🤔 What is MeetMind?

**MeetMind** is a full-stack AI-powered video call platform built with Next.js 16 and React 19. It lets you conduct real-time video calls with custom AI agents, automatically generates meeting summaries and transcripts in the background, and delivers a complete post-call experience — including video playback, transcript search, and an AI chat that actually understands what was discussed.

> *"Don't just record your meetings — understand them."*

---

## ✨ Features

### 🔴 Core Features

| Feature | Description |
|---|---|
| **AI Video Calls** | Real-time video calls powered by Stream Video SDK with custom AI agents |
| **Custom AI Agents** | Build and deploy your own real-time agents inside calls |
| **Auto Summaries** | AI generates structured meeting summaries automatically after every call |
| **Transcripts** | Full call transcripts generated via background jobs using Inngest |
| **Recordings** | Every call is recorded and available for later playback |
| **Meeting History** | Browse all past meetings with statuses — completed, missed, upcoming |

### 🟡 Smart Post-Call Features

| Feature | Description |
|---|---|
| **Video Playback** | Watch recordings directly inside the app with a clean player UI |
| **Transcript Search** | Full-text search across transcripts to find any moment instantly |
| **AI Meeting Q&A** | Chat with an AI that has full context of your meeting — ask anything |
| **OpenAI Integration** | GPT-powered intelligence for summaries, Q&A, and agent responses |

### 🔥 Platform Features

| Feature | Description |
|---|---|
| **Polar Subscriptions** | Monetization built-in with Polar for subscription management |
| **Better Auth Login** | Secure, modern authentication via Better Auth |
| **Mobile Responsive** | Fully responsive UI — works seamlessly on any device |
| **CodeRabbit PR Reviews** | AI-assisted Git workflow with automated code review on PRs |
| **Background Jobs** | Inngest-powered async processing for transcripts and summaries |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| Next.js 16 + React 19 | Core full-stack framework |
| Tailwind CSS v4 | Styling |
| shadcn/ui | UI component library |
| Stream Video SDK | Real-time video calls |
| Stream Chat SDK | In-call and post-call messaging |

### Backend & Auth
| Technology | Purpose |
|---|---|
| Next.js API Routes | Server-side API layer |
| Better Auth | Authentication & session management |
| Polar | Subscription billing & management |
| Inngest | Background job processing (transcripts, summaries) |

### AI Layer
| Technology | Purpose |
|---|---|
| OpenAI API | Summaries, transcripts, AI Q&A, agent intelligence |

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────┐
│         Next.js 16 + React 19 Frontend        │
│    Tailwind v4 · shadcn/ui · Stream SDKs      │
└──────────────────┬───────────────────────────┘
                   │
┌──────────────────▼───────────────────────────┐
│          Next.js API Routes (Backend)         │
│     Better Auth · Polar · Inngest Jobs        │
└────────┬─────────────────────┬───────────────┘
         │                     │
┌────────▼────────┐   ┌────────▼────────────────┐
│   OpenAI API    │   │     Stream Platform      │
│  Summaries      │   │  Video SDK · Chat SDK    │
│  Transcripts    │   │  Recordings · Agents     │
│  AI Q&A         │   └─────────────────────────┘
└─────────────────┘
         │
┌────────▼────────────────┐
│   Inngest Background    │
│   Jobs Pipeline         │
│   Post-call processing  │
└─────────────────────────┘
```

---

## 📁 Project Structure

```
meetmind/
│
├── app/                            → Next.js 16 App Router
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── meetings/
│   │   │   ├── [meetingId]/
│   │   │   │   ├── page.tsx        → Meeting detail + playback
│   │   │   │   └── transcript/     → Transcript search view
│   │   │   └── page.tsx            → Meeting history
│   │   ├── call/
│   │   │   └── [callId]/
│   │   │       └── page.tsx        → Live call room
│   │   └── dashboard/
│   │       └── page.tsx
│   └── api/
│       ├── auth/                   → Better Auth handlers
│       ├── meetings/               → Meeting CRUD APIs
│       ├── ai/                     → OpenAI summary & Q&A
│       └── webhooks/               → Stream + Polar webhooks
│
├── components/
│   ├── call/
│   │   ├── CallRoom.tsx            → Live video call UI
│   │   ├── AgentPanel.tsx          → AI agent controls
│   │   └── CallControls.tsx
│   ├── meeting/
│   │   ├── MeetingCard.tsx
│   │   ├── TranscriptView.tsx      → Searchable transcript
│   │   ├── VideoPlayer.tsx         → Recording playback
│   │   └── AIChat.tsx              → Post-call AI Q&A
│   └── ui/                         → shadcn/ui components
│
├── inngest/
│   ├── client.ts
│   └── functions/
│       ├── generateTranscript.ts   → Background transcript job
│       └── generateSummary.ts      → Background summary job
│
├── lib/
│   ├── auth.ts                     → Better Auth config
│   ├── stream.ts                   → Stream SDK setup
│   ├── openai.ts                   → OpenAI client
│   └── polar.ts                    → Polar subscription config
│
├── .env.local
└── package.json
```

---

## 🔄 User Flow

```
1. Signup / Login (Better Auth)
          ↓
2. Subscribe to a Plan (Polar)
          ↓
3. Start or Schedule a Meeting
          ↓
4. Join Live Video Call with AI Agent (Stream Video SDK)
          ↓
5. Call Ends → Inngest Background Jobs Trigger
          ↓
6. Transcript + Summary Auto-Generated (OpenAI)
          ↓
7. Post-Call Experience:
   ├── Watch Recording (Video Playback)
   ├── Search Transcript (Full-text Search)
   └── Chat with AI about the Meeting (AI Q&A)
          ↓
8. Review Meeting History & Statuses ✅
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [Stream Account](https://getstream.io/) — Video + Chat SDK
- [OpenAI API Key](https://platform.openai.com/)
- [Polar Account](https://polar.sh/) — Subscriptions
- [Inngest Account](https://inngest.com/) — Background jobs
- [VS Code](https://code.visualstudio.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/meetmind.git
cd meetmind
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create `.env.local`:
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Stream
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Polar
POLAR_ACCESS_TOKEN=your_polar_access_token
NEXT_PUBLIC_POLAR_PRODUCT_ID=your_product_id

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### 4. Run Development Server
```bash
npm run dev        # Runs on http://localhost:3000
```

### 5. Run Inngest Dev Server (separate terminal)
```bash
npx inngest-cli@latest dev
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

- [Stream](https://getstream.io/) — Video & Chat SDK powering real-time calls
- [OpenAI](https://openai.com/) — AI backbone for summaries, transcripts & Q&A
- [Inngest](https://inngest.com/) — Background job processing
- [Polar](https://polar.sh/) — Subscription & billing infrastructure
- [Better Auth](https://better-auth.com/) — Modern authentication
- [shadcn/ui](https://ui.shadcn.com/) — Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) — Styling framework

---

<div align="center">

**Built with ❤️ by a developer who believes meetings deserve better than just a recording**

*If MeetMind added value to your workflow, drop a ⭐ on GitHub — it means a lot!*

</div>