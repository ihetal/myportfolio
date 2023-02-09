import React from "react";
import spark from "../assets/img/spark.png";
export default function Skills() {
  return (
    <section className="skills container">
      <div class="section-title-wrapper">
        <div class="section-grey-line"></div>
        <div class="section-colored-line-2"></div>
        <h2 class="section-title-text">Skills</h2>
        <div class="section-colored-line-2"></div>
        <div class="section-grey-line"></div>
      </div>

      <div class="row" data-aos="zoom-in">
        <div class="col-lg-3 col-md-4 mt-2 mt-md-0 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:python"
                data-inline="false"
              ></span>
            </h2>
            <h3>Python</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 mt-md-0 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:java"
                data-inline="false"
              ></span>
            </h2>
            <h3>Java</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 mt-md-0 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:javascript"
                data-inline="false"
              ></span>
            </h2>
            <h3>Javascript</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 mt-lg-0 col-sm-6">
          <div class="icon-box">
            <img
              src={spark}
              style={{ height: "40px", width: "50px" }}
              alt="spark"
            />
            <h3>PySpark</h3>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:react"
                data-inline="false"
              ></span>
            </h2>
            <h3>React.js</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:redux"
                data-inline="false"
              ></span>
            </h2>
            <h3>Redux</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:nodejs"
                data-inline="false"
              ></span>
            </h2>
            <h3>Node.js</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:vue"
                data-inline="false"
              ></span>
            </h2>
            <h3>Vue.js</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:angular-icon"
                data-inline="false"
              ></span>
            </h2>
            <h3>Angular.js</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:spring-icon"
                data-inline="false"
              ></span>
            </h2>
            <h3>Spring Boot</h3>
          </div>
        </div>

        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="vscode-icons:file-type-mongo"
                data-inline="false"
              ></span>
            </h2>
            <h3>Mongodb</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="simple-icons:microsoftsqlserver"
                data-inline="false"
                style={{ color: "red" }}
              ></span>
            </h2>
            <h3>SQL/MySQL</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:aws"
                data-inline="false"
              ></span>
            </h2>
            <h3>AWS</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:azure-icon"
                data-inline="false"
              ></span>
            </h2>
            <h3>Azure</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="cib:flask"
                data-inline="false"
              ></span>
            </h2>
            <h3>Flask</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:html-5"
                data-inline="false"
              ></span>
            </h2>
            <h3>HTML</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:css-3"
                data-inline="false"
              ></span>
            </h2>
            <h3> CSS</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-2 col-sm-6">
          <div class="icon-box">
            <h2>
              <span
                class="iconify"
                data-icon="logos:docker-icon"
                data-inline="false"
              ></span>
            </h2>
            <h3>Docker</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
