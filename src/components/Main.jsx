import React from "react"
import ProfilePic from "../assets/Profile.png"

export default function Main() {

    return (
        <div className="main">
        <div className="main-social">
            <a href="https://www.instagram.com/qacheem" target="_blank">
                <i class="fa-brands fa-instagram fa-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/qasim-khokhar/" target="_blank">
                <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
            <a href="https://github.com/amateurCrypt" target="_blank">
                <i class="fa-brands fa-square-github fa-xl"></i>
            </a>
        </div>
        <div className="main-headline">
            <h2>Muhammad Qasim</h2>
            <h3> --------- Frontend Developer</h3>
            <p>
                I'm a creative frontend developer based in Toronto, Canada. I'm very passionate about my work and love to create unique,
                appealing and interactive websites.
            </p>
            <div className="main-button">
                <button>Say Hello          <i class="fa-sharp fa-regular fa-paper-plane fa-sm"></i></button>
            </div>
        </div>
        <div className="main-pic">
            <img src={ProfilePic}></img>
        </div>
      </div>
    )
  }

  