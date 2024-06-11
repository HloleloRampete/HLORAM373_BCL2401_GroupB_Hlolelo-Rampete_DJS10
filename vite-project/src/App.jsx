import React from "react"
import { useEffect, useState } from "react-dom"

export default function App() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)

  React.useEffect(() => {
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

  const renderPosts = () => {
    if (error) {
      return <p>Error fetching posts: {error}</p>;
    }
  

  return (
    <h1>Hi</h1>
  )
}