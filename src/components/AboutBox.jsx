import React from "react";
import cv_boonruksa from "../assets/download/CV_BOONRUKSA.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About Me*/}
        <div className="col">
          <div className="about-info">
            <h3>My introduction</h3>
            <p>
              Hello! My name is Boonruksa Winanon, and I am a software
              Engineering. I am passionate about Javascript and have experience
              in mySQL and UX/UI . I enjoy collaborating with others and am
              always eager to learn and grow.
            </p>
            <div className="about-btn">
              <a href={cv_boonruksa} target="_blank">
                <button className="btn">
                  Download CV <i className="uil uil-import"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        {/** Skills*/}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span>HTML</span>
                <span>JavaScript</span>
                <span>CSS</span>
                <span>Boostop</span>
                <span>Figma</span>
                <span>React</span>
              </div>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Backend</h3>
              <div className="skills-list">
                <span>PHP</span>
                <span>Node.js</span>
                <span>CSS</span>
                <span>Boostop</span>
              </div>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
              <div className="skills-list">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
