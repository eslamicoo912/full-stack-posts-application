import mongoose from "mongoose";

const Post = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
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

const PostModel = mongoose.model("PostModel", Post);

export default PostModel;
