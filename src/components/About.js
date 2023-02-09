import React, { Component } from "react";
import intropic from "../assets/img/intropic.png";
import intropic2 from "../assets/img/intropic2.png";

export class Introduction extends Component {
  render() {
    return (
      <section class="home_banner_area" id="about">
        <div class="section-title-wrapper">
          <div class="section-grey-line"></div>
          <div class="section-colored-line-1"></div>
          <h2 class="section-title-text">About me</h2>
          <div class="section-colored-line-1"></div>
          <div class="section-grey-line"></div>
        </div>

        <div class="about">
          <div class="container" data-aos="fade-up">
            <div class="intro">
              <p>
                <strong>
                  I completed my Masters in software engineering from San Jose
                  State University, specializing in Distributed Systems and Data
                  Science. A tech-enthusiast who loves developing and building
                  new applications. I am a self-starter and a go getter with 4.5
                  years of experience in software development and data
                  analytics. I have a strong interest in solving conceptual and
                  analytical problems. I am an enthusiastic learner, and believe
                  that learning grows by sharing.
                </strong>
              </p>
            </div>
            <br />
            <div class="row">
              <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-right">
                <h3>FULL STACK DEVELOPMENT</h3>
                <strong>MEAN/MERN Stack developer</strong>
                <ul>
                  <li>
                    <i class="fa fa-bolt"></i> Develop highly interactive Front
                    end / User Interfaces using several javascript frameworks:{" "}
                    <strong>React-Redux, Vue and Angular.</strong>
                  </li>
                  <li>
                    <i class="fa fa-bolt"></i> Experience in building backend
                    micro-service architecture in{" "}
                    <strong>Node and Spring Boot.</strong>
                  </li>
                  <li>
                    <i class="fa fa-bolt"></i> Experience working on multiple
                    cloud platforms: <strong>AWS, Heroku, Azure</strong>
                  </li>
                  <li>
                    <i class="fa fa-bolt"></i> Hosting and maintaining websites
                    on virtual machine instances along with integration of
                    databases.
                  </li>
                </ul>
              </div>
              <div class="col-lg-5" data-aos="fade-left">
                <img src={intropic} class="img-fluid" alt="" />
              </div>
            </div>
            <div class="row">
              <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-right">
                <h3> DATA SCIENCE AND ANALYTICS</h3>
                <ul>
                  <li>
                    <i class="fa fa-bolt"></i> Develop highly scalable
                    production ready models for various use cases. Experience
                    working with NLP projects.
                  </li>
                  <li>
                    <i class="fa fa-bolt"></i> Complex quantitative modelling
                    for dynamic forecasting and time series analysis.
                  </li>
                  <li>
                    <i class="fa fa-bolt"></i> Develop data processing pipelines
                    in PySpark.
                  </li>
                  <li>
                    <i class="fa fa-bolt"></i> Experience setting up and working
                    with Spark streaming services.
                  </li>
                </ul>
              </div>
              <div class="col-lg-5" data-aos="fade-left">
                <img src={intropic2} class="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>
    );
  }
}

export default Introduction;
