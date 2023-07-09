import React from "react"
import Pic1 from "../assets/html5.svg"
import Pic2 from "../assets/CSS3.svg"
import Pic3 from "../assets/JS.svg"
import Pic4 from "../assets/react.svg"
import Pic5 from "../assets/git.svg"

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
                    <img src={Pic1}></img>
                    <div className="html-text">
                      <h4>HTML</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={Pic2}></img>
                    <div className="html-text">
                      <h4>CSS</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={Pic3}></img>
                    <div className="html-text">
                      <h4>Javascript</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={Pic4}></img>
                    <div className="html-text">
                      <h4>React</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={Pic5}></img>
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
                    <img src={Pic1}></img>
                    <div className="html-text">
                      <h4>Google Suite</h4>
                    </div>
                  </div>

                  <div className="skill-html">
                    <img src={Pic1}></img>
                    <div className="html-text">
                      <h4>Notion</h4>
                    </div>
                  </div>
                
                </div>
                
            </div>
        </div>
      </div>
    )
  }