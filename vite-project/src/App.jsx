// import React from "react"
import { useEffect, useState } from "react";
// import RenderPosts from "./RenderPosts.jsx"

export default function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsnplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Data fetching failed"); // Use the specific error message
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError("Data fetching failed"); 
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {error ? (
        <div>
          <strong>{error}</strong>
        </div>
      ) : (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {posts.map((post, index) => (
            <li key={post.id}>
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
