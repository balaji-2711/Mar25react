import React, { useState, useEffect } from "react";

function InfiniteScroll() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // to prepopuate the contents set to fetchPosts
  useEffect(() => {
    fetchPosts();
  }, []);

  // to add the scroll functionality
  useEffect(() => {
    function handleScroll() {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        fetchPosts();
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [posts]);

  // to set the content to posts after fetching the data

  function fetchPosts() {
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`)
      .then((response) => response.json())
      .then((newPosts) => {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        // setPosts(newPosts);
        setPage((prevPage) => prevPage + 1);
      });
  }

  return (
    <div>
      {posts.map((post) => (
        <div className="infinite" key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default InfiniteScroll;
