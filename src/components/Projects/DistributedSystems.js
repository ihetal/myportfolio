import React, { Component } from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./Project.css";
import distributedsystems from "../../assets/img/projects/distributedsyscover.jpg";

export class DistributedSystems extends Component {
  render() {
    return (
      <div>
        <Navbar styleprops="header_area2" />
        <section id="portfolio_details" class="portfolio_details container">
          <div class="container">
            <div class="section-title-wrapper">
              <div class="section-grey-line"></div>
              <div class="section-colored-line-2"></div>
              <h2 class="section-title-text">Basics of Distributed Systems</h2>
              <div class="section-colored-line-2"></div>
              <div class="section-grey-line"></div>
            </div>
          </div>

          <div
            id="distributedsystems"
            class="carousel slide"
            data-ride="carousel"
          >
            <ul class="carousel-indicators">
              <li
                data-target="#distributedsystems"
                data-slide-to="0"
                class="active"
              ></li>
            </ul>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="img-container">
                  <img src={distributedsystems} alt="" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          <div class="portfolio-description">
            <p>
              Here are a collection of my github repositories where I cover the
              basics of distributed systems:
            </p>
            <ul>
              <li>
                <a href="https://github.com/ihetal/MerkleTrees">Merkle Trees</a>
              </li>
              <li>
                <a href="https://github.com/ihetal/Distributed-Cache-solution-using-UDP">
                  Distributed Cache
                </a>
              </li>
              <li>
                <a href="https://github.com/ihetal/Consistent-Hashing-and-RHW-Hashing">
                  Consistent and Rendezvous Hashing
                </a>
              </li>
              <li>
                <a href="https://github.com/ihetal/LRU-Cache-and-Bloom-Filter">
                  LRU Cache and Bloom Filters
                </a>
              </li>
              <li>
                <a href="https://github.com/ihetal/Exploring-GraphQL">
                  Exploring GraphQL
                </a>
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

export default DistributedSystems;
