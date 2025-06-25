# 📝 PLP Task Manager

A modern, fully-responsive task-manager built with **React 18**, **Tailwind CSS v4.1**, **Vite**, and **React Router DOM**.  
Created as part of the **Power Learn Project (PLP) Week 3 React assignment**.

---

## 📚 Assignment Checklist

| Task | What was built |
|------|----------------------------------------------------------------------------------------------------------------------------------|
| **1. Project Setup** | Vite + React + Tailwind v4.1.  Clean folder structure (`components/`, `pages/`, `hooks/`, `context/`, `api/`, `utils/`). |
| **2. Component Architecture** | Reusable `Button`, `Navbar`, `Footer`, and `TaskManager` components with props for style variants. |
| **3. State Management & Hooks** | Custom hook `useLocalStorageTasks` (persist tasks).  Theme managed via `useTheme` (`ThemeContext`). |
| **4. API Integration** | Fetches random users with **Random User API** from `src/api/fetchUsers.js`; displayed in `UserList`. |
| **5. Styling w/ Tailwind** | Mobile–tablet–desktop responsive, dark-mode toggle, utility-class layout & spacing, custom **fade-in** animation. |
| **Routing** | Configured with `react-router-dom`: `/` (Home) and `/about`. |
| **Extra** | Counter demo, local-storage persistence, hover transitions, fully accessible buttons and inputs. |

---

## ✨ Live Demo

🔗 **Deployed URL →** [TODO add your link (Vercel / Netlify / GH Pages)]()

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/YOUR-USERNAME/plp-task-manager.git
cd plp-task-manager

# 2. Install dependencies
pnpm install

# 3. Run dev server
pnpm dev        # -> http://localhost:5173
src/
├── api/               # API functions (e.g. fetchUsers.js)
├── components/        # Re-usable UI (Navbar, Footer, Button, TaskManager, UserList)
├── context/           # ThemeContext (light/dark)
├── hooks/             # Custom hooks (useLocalStorageTasks, useTheme)
├── pages/             # Routed pages (Home.jsx, About.jsx)
├── utils/             # Helper functions (formatDate.js)
├── App.jsx            # Holds <Routes>
└── main.jsx           # ReactDOM.createRoot, wrapped with <BrowserRouter>

