import React from "react";

function Bio() {

  const bioStyle = {
    display: 'flex'
  }

  const dotStyle = {
    padding: '0em 1em'
  }

  return (
    <div style={bioStyle}>
      <h3>Bio</h3>
      <h3 style={dotStyle}>•</h3>
    </div>
  );
}

export default Bio;