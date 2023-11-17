import React from "react";

function Blog() {

  const blogStyle = {
    display: 'flex'
  }

  const dotStyle = {
    padding: '0em 1em'
  }

  return (
    <div style={blogStyle}>
      <h3>Blog</h3>
      <h3 style={dotStyle}>•</h3>
    </div>
  );
}

export default Blog;