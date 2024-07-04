import User from "../modals/users.modal.js";
import bcryptjs from "bcrypt";
import { errorHandler } from "../utils/error.js";
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPass });

  try {
    await newUser.save();
    res.status(201).json("user created successfully!!");
  } catch (error) {
    // res.status(500).json(error.message);
    next(error);
  }
};
