import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../Post/Post";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    const response = await axios.get("http://localhost:5000/posts");
    const { data } = response;
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="home">
      <div className="container">
        {posts.map((p) => {
          return <Post postData={p} />;
        })}
      </div>
    </div>
  );
}
