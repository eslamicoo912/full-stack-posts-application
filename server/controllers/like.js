import LikeModel from "../models/likes.js";

export const createLike = async (req, res) => {
  try {
    const like = new LikeModel(req.body);
    like.save();
    res.json(like);
  } catch (error) {
    console.log(error);
  }
};

export const getAllLikes = async (req, res) => {
  try {
    const likes = await LikeModel.find();
    res.json(likes);
  } catch (error) {
    console.log(error);
  }
};

export const getPostLike = async (req, res) => {
  const { post_id } = req.params;
  let count = 0;
  try {
    const likes = await LikeModel.find();
    likes.map((l) => {
      if(l.post_id===post_id) count++;
    })
    res.json({num: count})
  } catch (error) {
    console.log(error);
  }
};

export const deleteLike = async (req, res) => {
  const { id } = req.params;
  try {
    await LikeModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
