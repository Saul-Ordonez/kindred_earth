import React from "react";

function Header() {

  const headerStyle = {
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: 'red',
    padding: '1px'
  }

  return (
    <React.Fragment>
      <div style={headerStyle}>
        <h1>Kindred Earth</h1>
        <p>Acupuncture and Wellness</p>
      </div>
    </React.Fragment>
  );
}

export default Header;