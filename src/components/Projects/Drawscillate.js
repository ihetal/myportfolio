import React, { Component } from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./Project.css";
import drawscillate1 from "../../assets/video/drawscillate.webm";
import drawscillate2 from "../../assets/img/projects/drawscillatearch.jpg";
export class Drawscillate extends Component {
  render() {
    return (
      <div>
        <Navbar styleprops="header_area2" />
        <section id="portfolio_details" class="portfolio_details container">
          <div class="container">
            <div class="section-title-wrapper">
              <div class="section-grey-line"></div>
              <div class="section-colored-line-2"></div>
              <h2 class="section-title-text">
                Drawscillate: An interactive audio-visual game
              </h2>
              <div class="section-colored-line-2"></div>
              <div class="section-grey-line"></div>
            </div>
            <div id="drawscillate" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li
                  data-target="#drawscillate"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#drawscillate" data-slide-to="1"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="video-size">
                    <video
                      playsinline={true}
                      autoPlay={true}
                      loop
                      muted
                      class="video-player"
                    >
                      <source src={drawscillate1} type="video/webm" />
                    </video>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={drawscillate2} alt="" />
                  </div>
                </div>
              </div>
              <div class="portfolio-info">
                <ul>
                  <li>
                    <strong>Project Details</strong>:
                    <a
                      href="https://github.com/ihetal/drawscillate"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="portfolio-description">
              <p>
                Drawscillate enables you to play with sound & color to express
                your creativity. Harking back to the classic Buzz Wire game,
                this modern interpretation demands your focus as you attempt to
                trace a simple shape (like a heart or a star). Along the way,
                use the keyboard to switch colors and play with the oscillating
                sounds that react to your movements. However you choose to play,
                I sincerely hope you have fun!
              </p>
            </div>
          </div>
        </section>
        <br />
        <br />
        <Contact />
      </div>
    );
  }
}

export default Drawscillate;
