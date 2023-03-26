import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillLike, AiOutlineComment } from "react-icons/ai";
import "./Post.css";

export default function Post({ postData }) {
  const { user_id, text, date, likes_num, comments_num, top_rated } = postData;

  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const response = await axios.get(`http://localhost:5000/users/${user_id}`);
    const { data } = response;
    setUser(data);
  };

  useEffect(() => {
    fetchUser();
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
          <AiFillLike className="icon" />
          <p>{likes_num}</p>
        </div>
        <div className="comments">
          <AiOutlineComment className="icon" />
          <p>{comments_num}</p>
        </div>
      </div>
    </div>
  );
}
