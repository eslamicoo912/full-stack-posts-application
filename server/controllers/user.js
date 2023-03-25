import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const generateToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET);
};

export const createUser = async (req, res) => {
  const { img, name, password } = req.body;
  try {
    const isUserFound = await UserModel.findOne({ name: name });
    if (isUserFound)
      return res.status(401).json({ message: `${name} is already exists` });
    bcrypt
      .hash(password, 10)
      .then((hashedPassword) => {
        const user = new UserModel({
          img: img,
          name: name,
          password: hashedPassword,
        });
        user.save();
        return res
          .status(200)
          .json({ user: user, token: generateToken(user._id) });
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await UserModel.findOne({ name: name });
    if (!user) return res.status(401).json({ message: `${name} is not found` });
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) return res.status(403).json({ message: `wrong password` });
      return res.status(200).json({
        id: user._id,
        name: user.name,
        token: generateToken(user._id),
      });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true, upsert: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete(id);
    res.json({ message: `${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
