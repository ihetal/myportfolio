import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Projects extends Component {
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    return (
      <section id="projects" class="portfolio">
        <div class="container">
          <div class="section-title-wrapper">
            <div class="section-grey-line"></div>
            <div class="section-colored-line-2"></div>
            <h2 class="section-title-text">Projects</h2>
            <div class="section-colored-line-2"></div>
            <div class="section-grey-line"></div>
          </div>
          <div class="row" data-aos="fade-up">
            <div class="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-filters">
                <li data-filter="all" class="filter-active">
                  All
                </li>
                <li data-filter="filter-se">Software Engineering</li>
                <li data-filter="filter-ml">Machine Learning</li>
              </ul>
            </div>
          </div>
          <div class="row " data-aos="fade-up">
            <div class="col-lg-4 col-md-6 portfolio-item ">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">
                    Job Application and Management Portal
                  </h5>
                  <p class="card-text">
                    Uses machine learning models to make job recommendations to
                    users
                    <br />
                    <strong>Project URL</strong>:{"  "}
                    <a
                      href="http://18.144.84.225/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </p>
                </div>
                <div class="card-footer">
                  <Link
                    to="/jobrecommendation"
                    class="btn btn-outline-secondary"
                    onClick={this.scrollToTop}
                  >
                    <i class="fa fa-info-circle" aria-hidden="true"></i> More
                    Info
                  </Link>
                  <a
                    href="https://github.com/ihetal/Job-Application-Portal"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-outline-secondary"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i> Repo
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio-item"
              data-filter="filter-se"
            >
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Pathfinder</h5>
                  <p class="card-text">
                    A visualizer for various pathfinding algorithms like Astar,
                    Djsktra, DFS, BFS etc.
                  </p>
                  <strong>Project URL</strong>:{"  "}
                  <a
                    href="https://pathfindingapp.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
                <div class="card-footer">
                  <Link
                    to="/pathfinder"
                    class="btn btn-outline-secondary"
                    onClick={this.scrollToTop}
                  >
                    <i class="fa fa-info-circle" aria-hidden="true"></i> More
                    Info
                  </Link>
                  <a
                    href="https://github.com/ihetal/Pathfinder"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-outline-secondary"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i> Repo
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio-item"
              data-filter="filter-ml"
            >
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Real Time Stock Price Prediction</h5>
                  <p class="card-text">
                    Uses apache spark framework streaming service and ML models
                    to predict stock prices in real time
                  </p>
                </div>
                <div class="card-footer">
                  <Link
                    to="/stockrecommender"
                    class="btn btn-outline-secondary"
                    onClick={this.scrollToTop}
                  >
                    <i class="fa fa-info-circle" aria-hidden="true"></i> More
                    Info
                  </Link>
                  <a
                    href="https://github.com/ihetal/Real-Time-Stock-Price-Prediction"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-outline-secondary"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i> Repo
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio-item"
              data-filter="filter-se"
            >
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Drawscillate</h5>
                  <p class="card-text">
                    An interactive audio video buzzwire game using Java and
                    Processing libraries.
                  </p>
                </div>
                <div class="card-footer">
                  <Link
                    to="/drawscillate"
                    class="btn btn-outline-secondary"
                    onClick={this.scrollToTop}
                  >
                    <i class="fa fa-info-circle" aria-hidden="true"></i> More
                    Info
                  </Link>
                  <a
                    href="https://github.com/ihetal/drawscillate"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-outline-secondary"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i> Repo
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio-item"
              data-filter="filter-ml"
            >
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Text Classifier</h5>
                  <p class="card-text">
                    Uses several machine learning algorithms to classify text
                    into various categories.
                  </p>
                </div>
                <div class="card-footer">
                  <Link
                    to="/textclassification"
                    class="btn btn-outline-secondary"
                    onClick={this.scrollToTop}
                  >
                    <i class="fa fa-info-circle" aria-hidden="true"></i> More
                    Info
                  </Link>
                  <a
                    href="https://github.com/ihetal/Text-Classification"
                    target="_blank"
                    rel="noreferrer"
                    class="btn btn-outline-secondary"
                  >
                    <i class="fa fa-github" aria-hidden="true"></i> Repo
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-md-6 portfolio-item"
              data-filter="filter-se"
            >
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title">Distributed Systems</h5>
                  <p class="card-text">
                    A collection of my github repos where I try out basics of
                    distributed systems like merkle trees, distributed cache,
                    LRU cache, bloom filters and various hashing techniques.
                  </p>
                </div>
                <div class="card-footer">
                  <Link
                    to="/distributedsystems"
                    class="btn btn-outline-secondary"
                    onClick={this.scrollToTop}
                  >
                    <i class="fa fa-info-circle" aria-hidden="true"></i> More
                    Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
