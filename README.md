# 💼 Job Placement Portal

A full-stack web application built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)** that bridges the gap between job seekers and job providers. It features user authentication, job posting, real-time application tracking, and dedicated dashboards for both roles.

---

## 🚀 Features

### 👤 Job Seekers
- Register and log in
- Browse job listings
- Apply to jobs by uploading resumes
- Track the status of each application (Pending / Accepted / Rejected)

### 🧑‍💼 Job Providers
- Register and log in as a recruiter
- Post job vacancies with descriptions and criteria
- View list of applicants per job
- Accept or reject applicants directly from the dashboard

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios

**Backend:**
- Node.js
- Express.js
- Socket.io (for real-time updates)

**Database:**
- MongoDB (via Mongoose)

**Other Tools:**
- JSON Web Tokens (JWT) for authentication
- bcrypt for secure password hashing
- Git for version control

---

## 📁 Project Structure

Job-Placement-Portal/
│
├── client/                 # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── controllers/        # Business logic
│   ├── config/             # DB connection & middleware
│   └── server.js
│
├── .gitignore
├── README.md
└── package-lock.json

---

## 🧪 Getting Started Locally

### 📌 Prerequisites:
- Node.js
- MongoDB (local or Atlas cloud instance)

### 🔧 Backend Setup
cd server  
npm install  
npm start

### 💻 Frontend Setup
cd client  
npm install  
npm start

### 🔐 Environment Variables

In `server/`, create a `.env` file with the following:
MONGO_URI=your_mongo_connection_string  
JWT_SECRET=your_jwt_secret_key  
PORT=5000

---

## 📸 Screenshots

> Add screenshots here showing:
> - Job listings page
> - Application form
> - Recruiter dashboard
> - Login/Register interface

---

## 🙋‍♂️ Author

**Chetan Sharma**  
📧 chetanprakashshama@gmail.com  
🔗 https://www.linkedin.com/in/chetansharma20/  
💻 https://github.com/chetan705

---

## 🌟 Show Your Support

If you found this project helpful or interesting, feel free to ⭐ star this repository. Your support is appreciated!
