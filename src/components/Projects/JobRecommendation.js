import React, { Component } from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./Project.css";
import divyang1 from "../../assets/img/projects/Divyang.jpg";
import divyang2 from "../../assets/img/projects/divyangarch1.jpg";
import divyang3 from "../../assets/img/projects/JobPortal.JPG";
import divyang4 from "../../assets/img/projects/discuss.JPG";
import divyang5 from "../../assets/img/projects/profile.png";
export class JobRecommendation extends Component {
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
                Job Application and Management Portal
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
                <li data-target="#projectdetails" data-slide-to="2"></li>
                <li data-target="#projectdetails" data-slide-to="3"></li>
                <li data-target="#projectdetails" data-slide-to="4"></li>
              </ul>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="img-container">
                    <img src={divyang1} alt="" class="img-fluid" />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={divyang2} alt="" class="img-fluid" />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={divyang3} alt="" class="img-fluid" />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={divyang4} alt="" class="img-fluid" />
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="img-container">
                    <img src={divyang5} alt="" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="portfolio-info">
                <ul>
                  <li>
                    <strong>Project Details</strong>:
                    <a
                      href="https://github.com/ihetal/Job-Application-Portal"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <strong>Project URL</strong>:
                    <a
                      href="http://18.144.84.225/"
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
              <p>
                A job application and management portal which uses machine
                learning model to recommend jobs to users. The application has
                several pages like profile page, discussion forums, job search
                and for the employers an application management dashboard.
                <br />
                <br />
                <strong>Job Recommendations:</strong>
                <br />
                Designed an item based and user based collaborative filtering
                which recommends jobs to users based on jobs they have applied
                to and based on similiar user profiles. <br />
                <ul>
                  <li>
                    The item based collaborative filtering, uses locality
                    sensitive hashing with cosine similiarity to find out the
                    most similiar jobs.
                  </li>
                  <li>
                    The user based collaborative filtering, uses nearest
                    neighbor algorithm to find out the users most similar to the
                    current user.
                  </li>
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

export default JobRecommendation;
