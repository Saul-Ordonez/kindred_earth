import React from "react";

function AboutCCM() {

  const aboutStyle = {
    display: 'flex'
  }

  const dotStyle = {
    padding: '0em 1em'
  }

  return (
    <div style={aboutStyle}>
      <h3>About CCM</h3>
      <h3 style={dotStyle}>•</h3>
    </div>
  );
}

export default AboutCCM;