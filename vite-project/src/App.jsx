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
          "https://jsonplaceholder.typicode.com/posts"
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
      {error ? (
        <div className="error">
          <strong>{error}</strong>
        </div>
      ) : (
        <div className="posts">
          <h1>Posts</h1>
          <ul style={{ listStyleType: "none" }}>
            {posts.map((post, index) => (
              <li key={post.id}>
                <h2>
                  {index + 1}. {post.title}
                </h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
