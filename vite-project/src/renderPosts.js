const renderPosts = (posts, error) => {
    if (error) {
      return <p>Error fetching posts: {error}</p>;
    }
  
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    );
  };
  
  export default renderPosts;