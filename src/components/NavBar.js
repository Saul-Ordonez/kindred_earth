import React from "react";
import Home from "./Home.js"
import AboutCCM from "./AboutCCM.js"
import Services from "./Services.js"
import Blog from "./Blog.js"
import Contact from "./Contact.js"
import Bio from "./Bio.js"


function NavBar() {

  const navStyles = {
    backgroundColor: '#b18abf',
    padding: '1px',
    display: 'flex',
    justifyContent: 'center',
    textTransform: 'uppercase'
  }

  return (
    <React.Fragment>
      <div style={navStyles}>
        <Home />
        <Bio />
        <Services />
        <AboutCCM />
        <Blog />
        <Contact />
      </div>
    </React.Fragment>
  );
}

export default NavBar;