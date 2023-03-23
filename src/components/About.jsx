import React from "react"
import ProfilePic from "../assets/Profile.png"

export default function About() {

    return (
      <div className="about">
        <h1>About Me</h1>
        <div className="about-box">
            <img src={ProfilePic}></img>
            <div className="about-section">
                <div className="section-sub">
                    <div id="section-exp">
                    <i class="fa-sharp fa-regular fa-paper-plane fa-sm"></i>
                        <h4>Experience</h4>
                        <h6>2 Years</h6>
                    </div>
                    <div id="section-exp">
                        <i class="fa-sharp fa-regular fa-paper-plane fa-sm"></i>
                        <h4>Completed</h4>
                        <h6>6 Projects</h6>
                    </div>
                    <div id="section-exp">
                        <i class="fa-sharp fa-regular fa-paper-plane fa-sm"></i>
                        <h4>Support</h4>
                        <h6>2 Years</h6>
                    </div>
                </div>
                <p>Frontend Developer. I create web pages with UI / UX interface. I have 
                2 years of experience in public projects. I have clients that are happy
                with my work.
                </p>
            </div>
        </div>
        <div className="about-button">
                <button>Download Resume      <i class="fa-regular fa-file-pdf fa-xl"></i></button>
        </div>
      </div>
    )
  }