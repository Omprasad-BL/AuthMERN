import { User } from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { sendVerificationEmail } from "../mailtrap/emails.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { response } from "express";

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    const user = await User.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: new Date() },
    });

    if(!user){
        response.status(400).json({success:false, message:"Error occured while retrieving"})
    }

    
  } catch (error) {}
};

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("Invalid email or password");
    }
    const userAlreadyExists = await User.findOne({ email });
    console.log("user Exists", userAlreadyExists);

    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = Math.floor(Math.random() * 900000).toString();
    console.log("Verification token", verificationToken);

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now(),
    });
    await user.save();
    //jwt

    console.log("Email", user.email);

    generateTokenAndSetCookie(res, user._id);

    await sendVerificationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User saved successfully",
      user: {
        ...user._doc,
        password: null,
      },
    });
  } catch (err) {
    // res.send("signup route")
  }
};

export const signin = async (req, res, next) => {
  res.send("signin route");
};

export const login = async (req, res, next) => {
  res.send("login route");
};
