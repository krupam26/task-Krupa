# MERN Issue Tracker

A full-stack **Issue Tracker** application built with the **MERN stack** (MongoDB, Express, React, Node.js) as per the task requirements.

---

## 🚀 Features

- Create, view, update, and delete issues
- Filter issues by **status** and **priority** (via query parameters)
- Modern, responsive, and visually appealing UI:
  - Gradient background
  - Card-based issue list with hover effects and animations
  - Color-coded priority (red / orange / green) and status tags
  - Clean, professional form design with smooth focus states
- Loading, error, and empty states handled gracefully
- Proper HTTP status codes and meaningful error messages from backend displayed in UI

---

## 🛠 Tech Stack

- **Frontend**: React (Create React App), React Router DOM v6, Axios
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas (cloud)
- **Styling**: Custom CSS (pure modern CSS, no external UI libraries)

---

## 📁 Project Structure

```
issue-tracker/
├── backend/
│   ├── src/
│   │   ├── controllers/    # CRUD logic
│   │   ├── routes/         # API routes
│   │   ├── models/         # Issue schema
│   │   ├── middleware/     # Centralized error handler
│   │   ├── config/         # Database connection
│   │   └── app.js          # Express server setup
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable IssueForm
│   │   ├── pages/          # IssueList, CreateIssue, UpdateIssue
│   │   ├── hooks/          # Custom hook for fetching issues
│   │   ├── services/       # Axios API wrapper
│   │   ├── styles.css      # Modern custom styling
│   │   ├── App.jsx         # Routing
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## 🔗 API Design

**Base URL:** `/api/issues`

| Method | Route | Description | Query Params |
|------|------|------------|--------------|
| POST | `/` | Create a new issue | – |
| GET | `/` | Get all issues | `?status=` , `?priority=` |
| GET | `/:id` | Get a single issue | – |
| PATCH | `/:id` | Update issue (partial updates) | – |
| DELETE | `/:id` | Delete issue | – |

- Uses proper HTTP status codes
- Input validation via Mongoose schema
- Centralized error handling middleware

---

## 🧠 State Management

- **Server state** (issues list, loading, error, filters):
  - Custom hook `useIssues.js` using `useState` and `useEffect`
- **UI state** (form inputs):
  - Local `useState` inside `IssueForm.jsx`
- No global state management library used — React hooks provide a clean and predictable data flow for this scope

---

## 🔐 Authentication Decision

**Authentication intentionally skipped.**

**Reasoning:**  
The task emphasizes core CRUD operations, filtering, API design, state management, error handling, and Git discipline. Adding authentication would introduce unnecessary complexity and risk of bugs. A poorly implemented authentication system is worse than none.

> In a production system, I would implement JWT-based authentication using **httpOnly cookies** and **refresh tokens**.

---

## ⚠️ Known Limitations

- No authentication (intentional)
- No pagination (issue list may grow large)
- Success feedback via browser alerts
- No unit or integration tests
- No deployment configuration
- Styling done via custom CSS (no Tailwind / UI framework)

---

## 💻 Local Setup

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas account (free tier is sufficient)

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

Start the backend server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 🌱 Git Discipline

- Worked only on branch `task/krupa`
- Multiple meaningful commits (each representing one logical change)
- No direct commits to `main`
- Clean and readable commit history

---

## ✅ Final Notes

This submission focuses on **clarity, correctness, and disciplined engineering** rather than excessive features.

Thank you for the opportunity! 🙌

---

## 📌 How to Add This README

1. In your project root folder (same level as `backend` and `frontend`), create a file named **`README.md`**
2. Paste this entire content into the file
3. Save it
4. Commit and push:

```bash
git add README.md
git commit -m "add detailed README with architecture decisions and reasoning"
git push origin task/krupa
```

