import PostModel from "../models/post.js";

const findMax = (array) => {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) max = array[i];
  }
  return max;
};

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

export const getMostLikesPost = async (req, res) => {
  let likeNums = [];
  try {
    const posts = await PostModel.find();
    posts.map((p) => {
      likeNums.push(p.likes_num);
    });
    const max_likes = findMax(likeNums);
    const top_likes_post = posts.filter((p) => {
      return p.likes_num === max_likes;
    });
    res.json(top_likes_post[0]);
  } catch (error) {
    console.log(error);
  }
};

export const getMostCommentsPost = async (req, res) => {
  let comments_num = [];
  try {
    const posts = await PostModel.find();
    posts.map((p) => {
      comments_num.push(p.comments_num);
    });
    const max_comments = findMax(comments_num);
    const top_comments_post = posts.filter((p) => {
      return p.comments_num === max_comments;
    });
    res.json(top_comments_post[0]);
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
