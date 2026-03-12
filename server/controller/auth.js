import User from "../models/user.js";
import genToken from "../config/token.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email });
        }
        let token = await genToken(user._id);
        console.log("STEP 1 — Controller Hit");
        console.log("STEP 2 — Before Cookie");
        console.log("TOKEN:", token);
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",  // Set to true in production (HTTPS)
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7days in milliseconds
        })

        console.log("STEP 3 — After Cookie");

        return res.status(200).json(user)

    }
    catch (error) {
        console.error("Google Auth Error:", error);
        return res.status(500).json({ message: "Google auth error" });
    }

}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/",
        });
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout Error:", error);
        return res.status(500).json({ message: "Logout error" });
    }
}