import React from "react";
import { Link } from "react-router-dom";
import MyPhoto from "../assets/linkedin.jpg";

const About = () => {
  return (
    <div className="container py-5">
      <h1
        className="text-center mb-5 pageHeader"
        style={{ fontFamily: "Girassol" }}
      >
        ─── About ───
      </h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={MyPhoto}
              className="img-fluid rounded-start"
              alt="Profile Image"
            />
          </div>
          <div className="col-md-8 d-flex flex-column ">
            <div className="card-body">
              <h4 className="card-title text-center">
                Welcome To My Final Project
              </h4>
              <p className="card-text">Hello,</p>
              <p className="card-text">my name is Nurbaki Bayansal.</p>
              <p className="card-text">
                I developed this blog application as the final project of the
                Full Stack Developer training. In this project, I used{" "}
                <span>
                  <a
                    className="card-link"
                    href="https://firebase.google.com/"
                    target="_blank"
                  >
                    Google Firebase
                  </a>
                </span>{" "}
                as infrastructure.
              </p>
              <p className="card-text">
                This means; All blog data and user information are stored in the
                Google Firebase database. Thus, my project has a safe, practical
                and professional infrastructure that can be accessed from
                anywhere.
              </p>
              <p className="card-text">
                I used also React, Bootstrap in this project.
              </p>
              <p className="card-text">Thank you for visit.</p>
            </div>
            <ul className="list-group ">
              <li className="list-group-item">
                <a href="https://github.com/nurbaki" target="_blank">
                  My Github Page
                </a>
              </li>

              <li className="list-group-item">
                <Link to={"/"} className="card-link">
                  Go Back
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
