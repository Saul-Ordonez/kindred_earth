import React from "react";

function Services() {

  const servicesStyle = {
    display: 'flex'
  }

  const dotStyle = {
    padding: '0em 1em'
  }

  return (
    <div style={servicesStyle}>
      <h3>Services</h3>
      <h3 style={dotStyle}>•</h3>
    </div>
  );
}

export default Services;