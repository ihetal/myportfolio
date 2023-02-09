import React, { Component } from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./Project.css";
import pathfinder1 from "../../assets/video/pathfinder.webm";
import pathfinder2 from "../../assets/video/maze.webm";
import pathfinder3 from "../../assets/img/projects/PathFinder.jpg";

export class Pathfinder extends Component {
  render() {
    return (
      <div>
        <Navbar styleprops="header_area2" />
        <section id="portfolio_details" class="portfolio_details container">
          <div class="container">
            <div class="section-title-wrapper">
              <div class="section-grey-line"></div>
              <div class="section-colored-line-2"></div>
              <h2 class="section-title-text">Pathfinder</h2>
              <div class="section-colored-line-2"></div>
              <div class="section-grey-line"></div>
            </div>
            <div id="pathfinder" class="carousel slide" data-ride="carousel">
              <ul class="carousel-indicators">
                <li
                  data-target="#pathfinder"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#pathfinder" data-slide-to="1"></li>
                <li data-target="#pathfinder" data-slide-to="2"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="video-size">
                    <video
                      src={pathfinder1}
                      playsinline={true}
                      autoPlay={true}
                      loop
                      muted
                      class="video-player"
                    >
                      <source src={pathfinder1} type="video/webm" />
                    </video>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="video-size">
                    <video
                      playsinline={true}
                      autoPlay={true}
                      loop
                      muted
                      class="video-player"
                    >
                      <source src={pathfinder2} type="video/webm" />
                    </video>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={pathfinder3} alt="" />
                  </div>
                </div>
              </div>
              <div class="portfolio-info">
                <ul>
                  <li>
                    <strong>Project Details</strong>:{" "}
                    <a
                      href="https://github.com/ihetal/Pathfinder"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <strong>Project URL</strong>:
                    <a
                      href="https://pathfindingapp.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="portfolio-description">
              <h3>Pathfinding Algorithms Visualizer</h3>
              <p>
                This application lets you visualize pathfinding algorithms,
                which are used to find the shortest path between any two given
                points. The algorithms used in this application are:
                <ul>
                  <li>Djsktra's Algorithm</li>
                  <li>Astar(A*) Algorithm</li>
                  <li>Breadth First Search(BFS) Algorithm</li>
                  <li>Depth First Search(DFS) Algorithm</li>
                </ul>
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

export default Pathfinder;
