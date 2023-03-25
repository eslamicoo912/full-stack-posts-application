import PostModel from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    const post = new PostModel(req.body);
    post.save();
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = async (req, res) => {
  const { userid } = req.params;
  try {
    const posts = await PostModel.find({ userid: userid });
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostModel.findById(id);
    res.json(post);
  } catch (error) {
    console.log(error);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.json(posts);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedPost = await PostModel.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    await PostModel.findByIdAndDelete(id);
    res.json({ message: `${id} deleted` });
  } catch (error) {
    console.log(error);
  }
};
