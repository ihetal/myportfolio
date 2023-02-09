import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import me from "../assets/img/me.jpg";
import github from "../assets/img/github.svg";
import linkedin from "../assets/img/linkedin.png";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();

    let templateParams = {
      user_name: this.state.name,
      to_email: "hetalpshah26@gmail.com",
      user_email: this.state.email,
      message: this.state.message,
    };
    emailjs
      .send(
        "service_3f6qn3c",
        "template_8b4mf57",
        templateParams,
        "8NXNFpGWPmtMijGR6"
      )
      .then((res) => {
        alert("Thank you for contacting me. I will get back within 24 hours!");
        this.setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Something went wrong!");
      });
  };
  render() {
    return (
      <section id="contact" class="contact">
        <div class="section-title-wrapper">
          <div class="section-grey-line"></div>
          <div class="section-colored-line-1"></div>
          <h2 class="section-title-text">Contact Me</h2>
          <div class="section-colored-line-1"></div>
          <div class="section-grey-line"></div>
        </div>
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 "
              data-aos="fade-up"
            >
              <div class="contact-wrapper">
                <div class="w-layout-grid about-header-grid">
                  <div class="profile">
                    <img
                      src={me}
                      width="120"
                      height="120"
                      sizes="120px"
                      alt=""
                      class="about-image"
                    />
                  </div>
                  <div class="about-title-wrapper">
                    <h3>Hetal Shah</h3>
                    <h6 class="caption-text">
                      <i
                        class="fa fa-map-marker"
                        aria-hidden="true"
                        style={{ fontSize: "18px" }}
                      ></i>
                      {"  "} Greater Seattle Area
                    </h6>
                  </div>
                </div>
                <div class="contact-info">
                  <h2>GET IN TOUCH! ‍</h2>
                  <p style={{ lineHeight: "32px" }}>
                    Discuss a project or just want to say hi? My inbox is always
                    open.
                    <br />
                    <strong>hetalpshah26@gmail.com</strong>
                    <br />
                    You can also find me on
                    <br />
                  </p>
                  <div class="social-links ">
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
            </div>
            <div
              class="col-lg-6 mb-0 d-lg-flex flex-lg-column align-items-stretch  "
              data-aos="fade-up"
            >
              <div class="contact-form-wrapper w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  className="contact-form"
                  onSubmit={this.onSubmit}
                >
                  <h3 class="form-title-text">Contact me</h3>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-text-field  w-input"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-text-field  w-input"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      placeholder="Message..."
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      required
                      class="form-text-area w-input"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <input
                      type="submit"
                      value="Submit"
                      data-wait="Please wait..."
                      style={{ width: "100%" }}
                      class="button-color-2 w-button"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
