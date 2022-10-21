import React, { useEffect, useState } from "react";
import "./feed.css";
import Post from "./post";
import Tweet from "./tweet";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => setPosts(json));

    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <Tweet />
      {posts.map((post, idx) => {
        return (
          <Post
            key={`${post.id}_${idx}`}
            displayName={users[post.userId - 1]?.name}
            username={users[post.userId - 1]?.username}
            verified={post.userId % 2 !== 0}
            text={post.title}
            avatar={
              "https://images.pexels.com/photos/4016173/pexels-photo-4016173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            image={post.image}
          />
        );
      })}
    </div>
  );
}

export default Feed;
