import mongoose from "mongoose";

const User = mongoose.Schema({
  img: String,
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts_num: {
    type: Number,
    default: 0,
  },
  likes_num: {
    type: Number,
    default: 0,
  },
  comments_num: {
    type: Number,
    default: 0,
  },
  top_rated: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("UserModel", User);

export default UserModel;
