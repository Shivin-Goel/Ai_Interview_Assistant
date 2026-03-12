import express from "express"
import { getCurrentUser, addCredits } from "../controller/userController.js"
import isAuth from "../middleware/isAuth.js"

const userRouter = express.Router();

userRouter.get("/current-user", isAuth, getCurrentUser)
userRouter.post("/add-credits", isAuth, addCredits)

export default userRouter;
