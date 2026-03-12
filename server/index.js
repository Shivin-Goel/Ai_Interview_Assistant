import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/connectDb.js';
dotenv.config();
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/authroute.js';
import userRouter from './routes/userroute.js';
import interviewRouter from './routes/interviewroute.js';

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview", interviewRouter)

const PORT = process.env.PORT || 3000;

connectDb();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});

console.log("Restart triggered");

