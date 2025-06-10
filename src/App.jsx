import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"

const App =() =>{
  return(
    <div className="main">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App