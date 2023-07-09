import React from "react"
import html from "../assets/html5.svg"
import css from "../assets/CSS3.svg"
import js from "../assets/JS.svg"
import react from "../assets/react.svg"
import git from "../assets/git.svg"
import google from "../assets/Google.svg"
import notion from "../assets/Notion.svg"
import figma from "../assets/Figma.svg"

export default function Navbar() {

    return (
      <div className="skills">

        <h1>Skills</h1>
        <h3>Tech Stack</h3>
        <div className="skill-box">

            <div className="skill-box1">

                <h2>Frontend Developer</h2>

                <div className="container">
                
                  <div className="skill-html">
                    <img src={html}></img>
                    <div className="html-text">
                      <h4>HTML</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={css}></img>
                    <div className="html-text">
                      <h4>CSS</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={js}></img>
                    <div className="html-text">
                      <h4>Javascript</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={react}></img>
                    <div className="html-text">
                      <h4>React</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={git}></img>
                    <div className="html-text">
                      <h4>Git</h4>
                    </div>
                  </div>
                </div>
                

            </div>

            <div className="skill-box1">

                <h2>Tools</h2>

                <div className="container">

                  <div className="skill-html">
                    <img src={google}></img>
                    <div className="html-text">
                      <h4>Google Suite</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={notion}></img>
                    <div className="html-text">
                      <h4>Notion</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={figma}></img>
                    <div className="html-text">
                      <h4>Figma</h4>
                    </div>
                  </div>
                
                </div>
                
            </div>
        </div>
      </div>
    )
  }