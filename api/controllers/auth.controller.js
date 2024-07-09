import User from "../modals/users.modal.js";
import bcryptjs from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validUser = await User.findOne({ email });
    const validPass = bcryptjs.hashSync(password, validUser.password);
    if (!validUser) return next(errorHandler(404, "user not found"));
    if (!validPass) return next(errorHandler(401, "wrong creds!!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);

    console.log(validUser._doc);
  } catch (error) {
    next(error);
  }
};
