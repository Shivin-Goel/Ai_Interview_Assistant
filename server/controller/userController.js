import User from "../models/user.js";

export const getCurrentUser = async (req, res) => {
    try {
        const userId = req.userId
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: "User doesnot found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error("Failed to get current user:", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export const addCredits = async (req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.credits += 100;
        await user.save();
        return res.status(200).json({ success: true, userData: user });
    } catch (error) {
        console.error("Failed to add credits:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}