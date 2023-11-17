import React from "react";

function Home() {

  const homeStyle = {
    display: 'flex'
  }

  const dotStyle = {
    padding: '0em 1em'
  }

  return (
    <div style={homeStyle}>
      <h3>Home</h3>
      <h3 style={dotStyle}>•</h3>
    </div>
  );
}

export default Home;