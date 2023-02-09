import React, { Component } from "react";
import rockliffe from "../assets/img/rockliffe.png";
import cinequest from "../assets/img/cinequest.png";
import lennox from "../assets/img/lennox.png";
import athenahealth from "../assets/img/athenahealth.png";
import bny from "../assets/img/bny.png";

export class Experience extends Component {
  render() {
    return (
      <section className="experience" id="experience">
        <div class="section-title-wrapper">
          <div class="section-grey-line"></div>
          <div class="section-colored-line-1"></div>
          <h2 class="section-title-text">Experience</h2>
          <div class="section-colored-line-1"></div>
          <div class="section-grey-line"></div>
        </div>
        <div class="container">
          <div
            class="experience-block"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="experience-title-block">
              <div class="experience-icon-wrapper">
                <img
                  src={cinequest}
                  width="120"
                  height="120"
                  alt=""
                  class="experience-icon"
                />
              </div>
              <div class="experience-title-wrapper">
                <div className="experience-card-header-div">
                  <div className="experience-card-heading-left">
                    <h6 class="caption-text experience-card-company">
                      Cinequest
                    </h6>
                    <h4 className="experience-card-title">
                      Software Engineer Intern
                    </h4>
                  </div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-location">
                      San Jose, California
                    </p>
                    <p className="experience-card-duration">
                      Sept 2020 - Dec 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              <li>
                Worked as a full stack engineer to build an online enables
                creators and artists to showcase their talents.
              </li>
              <li>
                Enhanced and created a distributed micro-service backend
                architecture, designed APIs, and built responsive design for
                existing features.
              </li>
              <li>
                Implemented design patterns and dependency injection to make the
                code modular and efficient. <br />
                <strong>
                  Technology Stack: Spring Boot, Java, Jquery, Javascript,
                  Angular.js, HTML, CSS, Docker, AWS.
                </strong>
              </li>
            </ul>
          </div>
          <div
            class="experience-block"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="experience-title-block">
              <div class="experience-icon-wrapper">
                <img
                  src={rockliffe}
                  width="120"
                  height="120"
                  alt=""
                  class="experience-icon"
                />
              </div>
              <div class="experience-title-wrapper">
                <div className="experience-card-header-div">
                  <div className="experience-card-heading-left">
                    <h6 class="caption-text experience-card-company">
                      Rockliffe Systems
                    </h6>
                    <h4 className="experience-card-title">
                      Software Engineer Intern
                    </h4>
                  </div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-location">
                      Campbell, California
                    </p>
                    <p className="experience-card-duration">
                      June 2020 - Aug 2020
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              <li>
                Engineered real time messaging and video calls using webrtc.
                Built new user facing functionalities like screen sharing,
                screen recording etc. Designed REST APIs in Node.js and user
                interface responsive to screen size in Vue.js.
              </li>
              <li>
                Integrated payment gateway in the application and used Agile and
                auto-build pipelines to develop and deploy services. <br />
                <strong>
                  Technology Stack: Javascript, Vue.js, Node.js, HTML, CSS,
                  Mongodb, AWS (EC2, S3)
                </strong>
              </li>
            </ul>
          </div>
          <div
            class="experience-block"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="experience-title-block">
              <div class="experience-icon-wrapper">
                <img
                  src={lennox}
                  width="120"
                  height="120"
                  alt=""
                  class="experience-icon"
                />
              </div>
              <div class="experience-title-wrapper">
                <div className="experience-card-header-div">
                  <div className="experience-card-heading-left">
                    <h6 class="caption-text experience-card-company">
                      Lennox India Technology Centre
                    </h6>
                    <h4 className="experience-card-title">Data Analyst</h4>
                  </div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-location">Chennai India</p>
                    <p className="experience-card-duration">
                      May 2017 - Nov 2018
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              <li>
                Analysed business goals {"&"} processes, constructed data
                models, analysed data and presented valuable recommendations on
                business problems to business partners and key stakeholders.
              </li>
              <li>
                Identified bottlenecks and automated ETL process using spark
                jobs making it easier to wrangle the data and reducing the
                processing time by 75%. Was awarded the lean sigma certificate
                for this process improvement.
              </li>
              <li>
                Conserved close to $10,000/year for the company based on HR and
                TPM calculation.
                <br />
                <strong>
                  Technology Stack: Python, Python Spark, SQL, MySQL, Azure,
                  Databricks, Power BI.
                </strong>
              </li>
            </ul>
          </div>
          <div
            class="experience-block"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="experience-title-block">
              <div class="experience-icon-wrapper">
                <img
                  src={athenahealth}
                  width="120"
                  height="120"
                  alt=""
                  class="experience-icon"
                />
              </div>
              <div class="experience-title-wrapper">
                <div className="experience-card-header-div">
                  <div className="experience-card-heading-left">
                    <h6 class="caption-text experience-card-company">
                      athenahealth
                    </h6>
                    <h4 className="experience-card-title">Software Engineer</h4>
                  </div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-location">Chennai, India</p>
                    <p className="experience-card-duration">
                      June 2014 - May 2015
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              <li>
                Worked in building a web application for electronic health
                record system for hospitals.Re-engineered database design and
                created back end services using REST APIs in JAVA to perform
                CRUD operations.
              </li>
              <li>
                Used Agile and Test-Driven Development to build reusable
                components and improved efficiency by ~25%.
              </li>
              <li>
                Performed Junit testing on the components. <br />
                <strong>
                  Technology Stack: Java, HTML, CSS, Javascript, SQL.
                </strong>
              </li>
            </ul>
          </div>
          <div
            class="experience-block"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div class="experience-title-block">
              <div class="experience-icon-wrapper">
                <img
                  src={bny}
                  width="120"
                  height="120"
                  alt=""
                  class="experience-icon"
                />
              </div>
              <div class="experience-title-wrapper">
                <div className="experience-card-header-div">
                  <div className="experience-card-heading-left">
                    <h6 class="caption-text experience-card-company">
                      BNY Mellon
                    </h6>
                    <h4 className="experience-card-title">
                      Software Engineer Intern
                    </h4>
                  </div>
                  <div className="experience-card-heading-right">
                    <p className="experience-card-location">Chennai, India</p>
                    <p className="experience-card-duration">
                      Jan 2014 - May 2014
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <ul className="experience-description">
              <li>
                Created ‘Log Analyzer’ which analysed the numerous log files
                generated by various applications.
              </li>
              <li>
                Worked on frontend designing along with designing Restful API's
                in Java. <br />
                <strong>
                  Technology Stack: HTML,CSS, Javascript, Jquery, Java, SQL.
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <br />
      </section>
    );
  }
}

export default Experience;
