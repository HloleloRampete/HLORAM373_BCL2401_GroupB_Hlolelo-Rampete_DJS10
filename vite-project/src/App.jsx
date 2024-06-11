import React from "react"
import { useEffect, useState } from "react-dom"
import renderPosts from "./renderPosts.js"

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

  // Function to conditionally render content 
  const renderPosts = () => {
    if (error) {
      return <p>Error fetching posts: {error}</p>;
    }
  
    return (
      <div>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </div>)
  }

  return (
    <div className="App">
      <h1>React Blog Post Fetcher</h1>
      {/* If using renderPosts.js, import and call it here */}
      renderPosts()
    </div>
  )

}