import React, { Component } from "react";
import { HashLink } from "react-router-hash-link";
import me from "../assets/img/me.jpg";
import "../assets/css/header.css";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <div id="mysidemenu">
          <div class="profile">
            <img src={me} alt="Hetal" class="img-fluid rounded-circle" />
            <h2>Hetal Shah</h2>
            <div class="social-links text-center">
              <a
                href="https://github.com/ihetal"
                target="_blank"
                class="github"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ihetalshah/"
                target="_blank"
                class="linkedin"
                rel="noreferrer"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <nav class="nav-menu">
            <ul>
              <li>
                <a href="/myportfolio">
                  <i
                    class="fa fa-home"
                    aria-hidden="true"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  Home
                </a>
              </li>
              <li>
                <a href="/myportfolio#about">
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                    style={{ fontSize: "18px" }}
                  ></i>{" "}
                  About
                </a>
              </li>

              <li>
                <a href="/myportfolio#experience">
                  <i class="fa fa-file" aria-hidden="true"></i> Experience
                </a>
              </li>
              <li>
                <a href="/myportfolio#projects">
                  <i class="fa fa-folder-open" aria-hidden="true"></i> Projects
                </a>
              </li>
              <li>
                <a href="/myportfolio#contact">
                  <i class="fa fa-envelope" aria-hidden="true"></i> Contact Me
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <header id="header" class="fixed-top header-transparent">
          <button type="button" class="mobile-nav-toggle d-lg-none">
            <i class="fa fa-bars"></i>
          </button>
          <div class="container d-flex align-items-center">
            <h1 class="logo mr-auto name-logo">
              <a href="/myportfolio">HS</a>
            </h1>

            <nav class="main-nav d-none d-lg-block">
              <ul>
                <li>
                  <HashLink smooth class="nav-link" to="/">
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth class="nav-link" to="/#about">
                    About
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#experience">
                    Experience
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#projects">
                    Projects
                  </HashLink>
                </li>
                <li>
                  <HashLink smooth to="/#contact">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Navbar;
