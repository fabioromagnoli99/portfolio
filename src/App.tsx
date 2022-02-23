import Topbar from "./components/topbar/topbar"
import Intro from "./components/intro/Intro"
import Portifolio from "./components/portifolio/portifolio"
import Contact from "./components/contact/contact"
import Works from "./components/works/works"
import Testimonials from "./components/testimonials/testimonials"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"


function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portifolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  )
}

export default App
