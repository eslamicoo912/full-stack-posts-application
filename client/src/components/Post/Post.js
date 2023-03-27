import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import "./Post.css";

export default function Post({ postData }) {
  const { _id, user_id, text, date, likes_num, comments_num, top_rated } =
    postData;

  const [likesNum, setLikesNum] = useState(0);
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState({});

  const fetchData = async () => {
    const userResponse = await axios.get(
      `http://localhost:5000/users/${user_id}`
    );
    setUser(userResponse.data);

    const likesNumResponse = await axios.get(
      `http://localhost:5000/likes/${_id}`
    );
    if (likesNumResponse.data) setLikesNum(likesNumResponse.data.num);

    const commentsResponse = await axios.get(
      `http://localhost:5000/comments/post_comments/${_id}`
    );
    setComments(commentsResponse.data);
  };

  const handleLike = async () => {
    let likeFound = false;
    const likeResponse = await axios.get(`http://localhost:5000/likes`);
    const { data } = likeResponse;
    if (data) {
      const isLiked = data.filter((like) => {
        if (like.post_id === _id && like.user_id === user_id) return like;
      });
      if (isLiked[0]) likeFound = true;
    }
    if (likeFound) {
      await axios.delete(
        `http://localhost:5000/likes/delete_like/${_id}/${sessionStorage.getItem(
          "user_id"
        )}`
      );
      fetchData();
    } else {
      await axios.post(`http://localhost:5000/likes`, {
        post_id: _id,
        user_id: user_id,
      });
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="post">
      <div className="header">
        <div className="userInfo">
          <img src={user.img} alt="user img" />
          <p>{user.name}</p>
        </div>
        <div className="date">
          <p>{date}</p>
        </div>
      </div>
      <div className="postText">{text}</div>
      <div className="footer">
        <div className="likes">
          <AiFillLike className="icon" onClick={handleLike} />
          <p>{likesNum}</p>
        </div>
        <div className="comments">
          <AiOutlineComment className="icon" />
          <p>{comments.length}</p>
        </div>
      </div>
    </div>
  );
}
