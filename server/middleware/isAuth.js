import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
    try {
        let { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized no token present" });
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!verifyToken) {
            return res.status(401).json({ message: "User does not have a valid token" });
        }
        req.userId = verifyToken.userId;
        next();
    } catch (error) {
        console.error("Auth Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default isAuth;