import CommentModel from "../models/comments.js";

export const createcomment = async (req, res) => {
  try {
    const comment = new CommentModel(req.body);
    comment.save();
    res.json(comment);
  } catch (error) {
    console.log(error);
  }
};

export const getAllcomments = async (req, res) => {
  try {
    const comments = await CommentModel.find();
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
};

export const getcomment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await CommentModel.findById(id);
  } catch (error) {
    console.log(error);
  }
};

export const getPostComments = async (req, res) => {
  const { post_id } = req.params;
  try {
    const comments = await CommentModel.find();
    const post_comments = comments.filter((c) => {
      return c.post_id === post_id;
    });
    res.json(post_comments);
  } catch (error) {
    console.log(error);
  }
};

export const deletecomment = async (req, res) => {
  const { id } = req.params;
  try {
    await CommentModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
};
