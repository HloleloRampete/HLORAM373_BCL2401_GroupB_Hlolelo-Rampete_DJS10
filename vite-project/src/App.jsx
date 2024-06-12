// import React from "react"
import { useEffect, useState } from "react"
// import RenderPosts from "./RenderPosts.jsx"

export default function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchPosts();
  }, [])


  
  return (
    <div className="App">
      <h1>Posts</h1>
      {error ? (
        <div style={{ color: "black" }}>Error: {error}</div>
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
  )

}