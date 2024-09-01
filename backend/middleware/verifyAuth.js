import jwt from "jsonwebtoken";

export const verifyAuth = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({success: false, message: "No token provided"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;

        if(!decoded){
            return res.status(401).json({success: false, message: "Invalid token"});
        }
        next();
    } catch (error) {
        return res.status(401).json({success: false, message: "Not authenticated"});
    }
}