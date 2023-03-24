import mongoose from "mongoose";

const Comment = mongoose.Schema({
  post_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

const CommentModel = mongoose.model("UserModel", Comment);

export default CommentModel;
