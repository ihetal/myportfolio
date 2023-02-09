import React, { Component } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
export class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <div className="main-body">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default Portfolio;
