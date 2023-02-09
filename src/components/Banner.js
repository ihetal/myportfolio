import React from "react";
import "../assets/scss/stars.scss";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.png";
import wave from "../assets/img/wave.png";

export default function Banner() {
  return (
    <div class="jumbotron jumbotron-fluid main-banner mb-0 text-center">
      <div id="stars"></div>
      <div class="container banner-content">
        <p>
          Hello!
          <span class="wave-emoji">
            <img alt="👋" draggable="false" src={wave} />
          </span>
          {"   "}My name is
        </p>
        <h1>Hetal Shah</h1>
        <p>
          I am a{" "}
          <span
            class="typed"
            data-typed-items="Developer, Full Stack Engineer, Data Science Enthusiast"
          ></span>
        </p>
        <div class="social-links text-center">
          <a
            href="https://github.com/ihetal"
            target="_blank"
            rel="noreferrer"
            class="github"
          >
            <img src={github} class="img-fluid" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ihetalshah/"
            target="_blank"
            rel="noreferrer"
            class="linkedin"
          >
            <img src={linkedin} class="img-fluid" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
