import genrateToken from "../../config/generateToken.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all the fields" });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ msg: "User already exists" });
    }
    const user = new User({ ...req.body });
    bcrypt.hash(password, 4, async (err, hash) => {
      const user = new User({
        ...req.body,
        password: hash,
      });

      await user.save();
      return res
        .status(201)
        .json({
          msg: "Register sucessfully",
          name: user?.name,
          email: user?.email,
        });
    });
  } catch (err) {
    return res.status(500).json({ msg: "Sever error", error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email,password);
  
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all the fields" });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ msg: "Invalid credetials" });
    }
    const hashed_password = user.password;
    const isMatch = await bcrypt.compare(password, hashed_password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credetials" });
    }
    return res.status(200).json({
      msg: "Login successfully",
      data: {
        name: user?.name,
        email: user?.email,
        token: genrateToken(user._id),
      },
    });
  } catch (err) {}
};
export { createUser, loginUser };
