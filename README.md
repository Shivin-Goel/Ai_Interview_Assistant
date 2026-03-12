# InterviewIQ - AI Interview Assistant

InterviewIQ is an advanced AI-powered interview preparation platform designed to help users practice and improve their interviewing skills. By leveraging cutting-edge Artificial Intelligence, the platform provides tailored interview questions based on the candidate's resume, desired role, and experience level, followed by real-time evaluations and comprehensive performance reports.

## 🚀 Features in Detail

### 1. AI-Powered Interview Generation
- **Context-Aware Questions**: Generates exactly 5 interview questions specifically tailored to the user's target role, experience level, selected skills, and past projects.
- **Dynamic Difficulty**: Questions progress naturally from easy to hard to simulate a real-life interview curve.
- **Resume Parsing**: Users can upload their PDF resumes. The backend extracts text using `pdfjs-dist` and uses AI to intelligently structure the candidate's background, ensuring hyper-personalized questions.

### 2. Real-Time Interview Evaluation
- **Smart Scoring**: The AI acts as a human interviewer, evaluating user responses across three key metrics:
  - *Confidence*: Clarity and assertiveness of the response.
  - *Communication*: Language simplicity and articulateness.
  - *Correctness*: Accuracy and relevance to the specific question.
- **Constructive Feedback**: Provides concise, actionable feedback (10-15 words) for every answer submitted, pointing out areas of improvement.

### 3. Comprehensive Analytics & Reports
- **Visual Dashboards**: Outfitted with `Recharts` and `react-circular-progressbar`, the application provides modern, visual analytics of the user's performance.
- **Downloadable PDF Reports**: Using `jsPDF` and `jspdf-autotable`, users can generate and download beautiful PDF layouts of their entire interview history, scores, and feedback for offline review.
- **History Tracking**: Saves all past interviews on the dashboard so candidates can track their improvement over time.

### 4. Credit-Based Ecosystem
- **Credit System**: Users consume credits (e.g., 50 credits) per interview generation to manage API rate limits and monetization logically.
- **Seamless Top-ups**: Users can buy more credits securely, updating their available balances in real-time.

### 5. Secure Authentication
- **Multi-Method Login**: Supports traditional Email/Password authentication and seamless Google Sign-In using Firebase Auth.
- **JWT & Cookie Security**: Backend secures all restricted routes utilizing HttpOnly cookies and JSON Web Tokens.

---

## 💻 Tech Stack in Detail

The application is built using the **MERN** stack (MongoDB, Express.js, React, Node.js) with carefully selected modern libraries.

### Frontend (Client)
- **Framework**: **React 19** paired with **Vite** for incredibly fast Hot Module Replacement (HMR) and optimized production builds.
- **Styling**: **TailwindCSS v4** for highly customizable, utility-first styling ensuring a responsive and modern interface.
- **State Management**: **Redux Toolkit (`@reduxjs/toolkit`) & React-Redux** used to maintain global user states like authentication data, credits, and profiles smoothly across the app without prop-drilling.
- **Routing**: **React Router DOM v7** for robust client-side routing and protected route implementations.
- **Animations**: **Framer Motion (`motion`)** extensively used to provide smooth page transitions, micro-interactions, and a premium feel.
- **Data Visualization**: **Recharts** for plotting score analytics graphs and **React Circular Progressbar** for beautiful score rings.
- **PDF Generation**: **jsPDF** and **jsPDF-AutoTable** strictly to format and download interview reports locally on the client.
- **Auth Service**: **Firebase v12** handles robust external OAuth configurations (e.g., Google login).
- **HTTP Client**: **Axios** tailored to send credentials (cookies) securely to the backend.

### Backend (Server)
- **Runtime & Framework**: **Node.js** running **Express.js v5** provides the robust RESTful API architecture.
- **Database Object Modeling**: **Mongoose v9** enforcing schemas and managing communication with the MongoDB cluster.
- **AI Integration**: Custom service integration with OpenRouter/Gemini models to construct realistic prompt engineering. AI responses are strictly sanitized to standard JSON formats.
- **Authentication pipeline**:
  - **jsonwebtoken (JWT)** generates the signed tokens upon login/registration.
  - **cookie-parser** intercepts the HTTP requests, extracting the JWT from secure cookies to validate active sessions on protected routes.
- **File Upload & Parsing System**:
  - **Multer**: intercepts `multipart/form-data` allowing the server to temporarily store uploaded resumes.
  - **pdfjs-dist**: powerful PDF reader that converts arbitrary resume PDFs into readable UInt8Arrays, then extracting textual string blocks for the AI to summarize.
- **Environment Management**: **dotenv** safely hides all crucial secrets, DB URIs, and API Keys.

---

## ⚙️ How to Run Locally

### Prerequisites
- Node.js installed (v18+)
- MongoDB Atlas cluster URL (or local instance)
- API Keys for AI Services (e.g., OpenRouter, Gemini)
- Firebase Project setup

### 1. Clone & Install
Open your terminal and install dependencies for both sides:
```bash
# Install Server dependencies
cd server
npm install

# Install Client dependencies
cd ../client
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the `server` directory:
```env
PORT=3000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_super_secret_key
AI_API_KEY=your_llm_api_key
```

Create a `.env` file in the `client` directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

### 3. Run the Application
Open two separate terminals.

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

The application client should now be running on `http://localhost:5173` while your backend locally targets `http://localhost:3000` (or as configured).
