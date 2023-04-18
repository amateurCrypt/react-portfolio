import React from "react"
import Pic1 from "../assets/html5.svg"

export default function Navbar() {

    return (
      <div className="skills">
        <h1>Skills</h1>
        <h3>Tech Stack</h3>
        <div className="skill-box">
            <div className="skill-box1">
                <h2>Frontend Developer</h2>
                <div className="skill-html">
                  <img src={Pic1}></img>
                  <div className="html-text">
                    <h4>HTML</h4>
                    <p>Advance</p>
                  </div>
                </div>
            </div>
            <div className="skill-box2">
                <h2>Tools</h2>
                
            </div>
        </div>
      </div>
    )
  }