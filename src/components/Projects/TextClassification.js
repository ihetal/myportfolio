import React, { Component } from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./Project.css";
import classification from "../../assets/img/projects/classificationcover.jpg";
export class TextClassification extends Component {
  render() {
    return (
      <div>
        <Navbar styleprops="header_area2" />
        <section id="portfolio_details" class="portfolio_details container">
          <div class="container">
            <div class="section-title-wrapper">
              <div class="section-grey-line"></div>
              <div class="section-colored-line-2"></div>
              <h2 class="section-title-text">Text Classification</h2>
              <div class="section-colored-line-2"></div>
              <div class="section-grey-line"></div>
            </div>
          </div>

          <div
            id="textclassification"
            class="carousel slide"
            data-ride="carousel"
          >
            <ul class="carousel-indicators">
              <li
                data-target="#textclassification"
                data-slide-to="0"
                class="active"
              ></li>
            </ul>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="img-container">
                  <img src={classification} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="portfolio-info">
              <ul>
                <li>
                  <strong>Project Details</strong>:
                  <a
                    href="https://github.com/ihetal/Text-Classification"
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
            <ul>
              <li>
                Programmed a news crawler in Python to extract structured
                information from news websites.
              </li>
              <li>
                Engineered a Machine Learning based classifier to classify
                extracted news article into nto 4 categories namely Health,
                Business, Entertainment, Technology.
              </li>
              <li>
                Applied several pre-processing & word embedding techniques like
                tokenization, lemmatization, TF-IDF, bag of words etc and tried
                out several algorithms: SVM, Logistic Regression, Naïve
                Bayes,Random Forest, KNN.
              </li>
            </ul>
          </div>
        </section>
        <br />
        <br />
        <Contact />
      </div>
    );
  }
}

export default TextClassification;
