import React from "react"
import viteLogo from '/vite.svg'

export default function Navbar() {

    return (
      <nav className="nav">
        <a className="nav-logo" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <h4 href="https://vitejs.dev">Muhammad</h4>
        </a>
        
        <ul id="nav-item" className="pointer">
          <li><a href="http://127.0.0.1:5173/">Home</a></li>
          <li><a href="https://vitejs.dev">About</a></li>
          <li><a href="https://vitejs.dev">Skills</a></li>
          <li><a href="https://vitejs.dev">Portfolio</a></li>
          <li><a href="https://vitejs.dev">Contact</a></li>
        </ul>

      </nav>
    )
  }