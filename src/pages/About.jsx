import React from "react";
import './About.css'
import { Link } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";

const About =() =>{
    return(
       <div className="scroll">
          <Header/>
            <div>
              <h1 className="h1">About Vivekanand College</h1>
              <p className="p">Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in [Year of Establishment, e.g., 1980]. Located in the bustling heart of [City/Area, e.g., Chembur, Mumbai], our college has consistently strived to uphold the highest standards of academic rigor and ethical values.<br></br>
Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.</p>
            <h1 className="max">Our Mission</h1>
            <ul className="p">
              <li>To provide high-quality, accessible education across various disciplines.</li>
              <li>To foster research, innovation, and creativity among students and faculty.</li>
              <li>To cultivate a diverse and inclusive learning environment.</li>
              <li>To instill strong ethical values and leadership qualities.</li>
            </ul>   
            <h1 className="max">Our Values</h1>
            <p className="p">Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, curiosity, and a relentless pursuit of knowledge.</p>
            <h1 className="max">Our History</h1>
            <p className="p">[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
          </div>
          <Footer/>{/*@2025 Vivekanand College. All rights reserved*/}
      </div>
    )
}

export default About 
    