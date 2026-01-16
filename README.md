# 💻 Talent-IQ Platform

![Talent-IQ App](/assets/screenshot-for-readme.png)

A real-time collaborative coding interview platform built with modern web technologies. Conduct technical interviews with video calls, collaborative code editing, and secure code execution.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green.svg)

---

## 🎯 What is This?

Interview Platform is a comprehensive solution for conducting technical interviews remotely. It provides:

- **Collaborative Coding Environment** - Real-time code editing with VSCode-like interface
- **Video Interviews** - Built-in video calling with screen sharing capabilities
- **Code Execution** - Secure, isolated code execution with instant feedback
- **Interview Management** - Dashboard with stats, session history, and practice problems

---

## ✨ Features

### 💻 Code Editor & Execution
- VSCode-powered code editor with syntax highlighting
- Multi-language support (JavaScript, Python, Java, and more)
- Secure code execution in isolated environments
- Auto-grading with test cases and instant feedback

### 🎥 Video Communication
- 1-on-1 video interview rooms
- Screen sharing for collaborative problem-solving
- Camera and microphone controls
- Session recording capabilities

### 💬 Real-time Collaboration
- Live chat messaging during interviews
- Real-time code synchronization
- Background job processing for async tasks
- Instant notifications and feedback

### 📊 Interview Management
- Dashboard with live statistics
- Session history and recent activity
- Practice problems for solo coding
- Room locking for privacy (max 2 participants)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18 | UI Framework |
| Vite | Build Tool |
| TanStack Query | Data Fetching & Caching |
| Clerk | Authentication |
| Stream SDK | Video Calling |
| Piston API | Code Execution |

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | REST API Framework |
| MongoDB (Mongoose) | Database |
| Inngest | Background Jobs |
| Stream API | Real-time Infrastructure |

### Development & Deployment
| Technology | Purpose |
|------------|---------|
| Git/GitHub | Version Control |
| ESLint | Code Linting |
| Vercel | Deployment Platform |

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **MongoDB** database (local or Atlas)
- **Git** for version control

### Required API Keys

| Service | Purpose | Get from |
|---------|---------|----------|
| Clerk | Authentication | [clerk.com](https://clerk.com) |
| Stream | Video & Chat | [getstream.io](https://getstream.io) |
| Inngest | Background Jobs | [inngest.com](https://inngest.com) |
| Piston | Code Execution | [github.com/engineer-man/piston](https://github.com/engineer-man/piston) |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ahmadalmuhidat/Talent-IQ.git
cd Talent-IQ
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your API keys (see below)
nano .env

# Start development server
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your API keys (see below)
nano .env

# Start development server
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api

---

## ⚙️ Environment Variables

### Backend (`.env`)

```bash
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
DB_URL=your_mongodb_connection_url

# Inngest (Background Jobs)
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stream (Video & Chat)
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Clerk (Authentication)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Client URL
CLIENT_URL=http://localhost:5173
```

### Frontend (`.env`)

```bash
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# API URL
VITE_API_URL=http://localhost:3000/api

# Stream Configuration
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api
```

---

## 🎨 Usage Guide

### Starting an Interview

1. Sign in using Clerk authentication
2. Click "New Session" to create an interview room
3. Share the room link with the candidate
4. Use video, chat, and code editor collaboratively

### Practice Mode

1. Navigate to "Practice Problems"
2. Select a problem from the list
3. Write your solution in the code editor
4. Run code to test against test cases
5. View feedback and results

---

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Follow ESLint configuration
- Write meaningful commit messages
- Add comments for complex logic
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Stream](https://getstream.io) for real-time infrastructure
- [Clerk](https://clerk.com) for authentication
- [Inngest](https://inngest.com) for background jobs
- [Piston](https://github.com/engineer-man/piston) for code execution
- [Sevalla](https://sevalla.com) for free-tier deployment

---

<div align="center">

**Built with ❤️ for better technical interviews**

</div>