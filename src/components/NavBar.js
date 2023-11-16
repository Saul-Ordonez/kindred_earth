import React from "react";
import Home from "./Home.js"
import AboutCCM from "./AboutCCM.js"
import Services from "./Services.js"
import Blog from "./Blog.js"
import Contact from "./Contact.js"
import Bio from "./Bio.js"


function NavBar() {
  return (
    <React.Fragment>
      <Home/>
      <Bio/>
      <Services/>
      <AboutCCM/>
      <Blog/>
      <Contact/>
    </React.Fragment>
  );
}

export default NavBar;