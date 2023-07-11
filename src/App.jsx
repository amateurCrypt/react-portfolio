import './App.css'
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/ContactForm"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Skills />
      {/* <Portfolio /> */}
      <Contact />
    </div>
  )
}

export default App
