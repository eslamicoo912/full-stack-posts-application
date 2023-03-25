import mongoose from "mongoose";

const Like = mongoose.Schema({
  post_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
});

const LikeModel = mongoose.model("LikeModel", Like);

export default LikeModel;
