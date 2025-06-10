import React from "react";
import './Home.css'
import { Link } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";

const Home = () =>{
    return(
    <div className="scroll">
        <Header/>
        <div>
        <h1 className="h1">Welcome to Vivekanand College!</h1>
        <p className="p">**Vivekanand College** is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.<br></br>
At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
        <h1 className="max">Why choose Vivekanand College?</h1>
        <ul className="pin">
          <li>**Legacy of Excellence:** Decades of commitment to quality education.</li>
          <li>**Experienced Faculty:** Learn from renowned experts and passionate educators.</li>
          <li>**Modern Facilities:** Well-equipped labs, expansive library, and comfortable campus.</li>
          <li>**Holistic Development:** Focus on co-curricular activities, sports, and community service.</li>
          <li>**Strong Placements:** Excellent career opportunities with leading companies.</li>
        </ul>
        <p>Ready to start your journey with us?</p>
        <button className="button">Apply Now!</button>
      </div>
      <div>
      <Footer/>{/*@2025 Vivekanand College. All rights reserved*/}
      </div>
    </div>
    
    )
}

export default Home