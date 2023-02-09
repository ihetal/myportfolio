import React, { Component } from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./Project.css";
import stock1 from "../../assets/img/projects/development.jpg";
import stock2 from "../../assets/img/projects/realtime.jpg";

export class StockRecommender extends Component {
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
                Real Time Stock Price Prediction using Spark Framework
              </h2>
              <div class="section-colored-line-2"></div>
              <div class="section-grey-line"></div>
            </div>
            <div
              id="projectdetails"
              class="carousel slide"
              data-ride="carousel"
            >
              <ul class="carousel-indicators">
                <li
                  data-target="#projectdetails"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#projectdetails" data-slide-to="1"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="img-container">
                    <img src={stock1} alt="" class="img-fluid" />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={stock2} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="portfolio-info">
                <ul>
                  <li>
                    <strong>Project Details</strong>:
                    <a
                      href="https://github.com/ihetal/Real-Time-Stock-Price-Prediction"
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
                In this project, a real-time stock price prediction model based
                on market trends and historical stock prices is proposed.
                <br /> The project combines historical prices with sentiment
                scores from market trends and news to build a hybrid model using
                Apache Spark framework. Used Spark Streaming service to build
                the model in real-time.
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

export default StockRecommender;
