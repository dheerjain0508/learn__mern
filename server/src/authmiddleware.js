import jwt from "jsonwebtoken";
import { User } from "./models/user.model.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET || "hush");

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error("Token verification error:", error.message);
      res.status(401).send("Not authorized, token failed");
    }
  } else {
    res.status(401).send("token is missing");
  }
};
export default protect;