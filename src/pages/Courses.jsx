import React from "react";
import './Courses.css'
import { Link } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";


const Courses =() =>{
    return(
        <div className="scroll">
            <Header/>
            <div>
                <h1 className="h1">Our Academic Program</h1>
                <p className="p">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
                <h1 className="max">Undergraduate Programs(UG)</h1>
                <hr></hr>
                <ul className="pin">
                    <li>**Bachelor of Science (B.Sc.)**</li>
                        <ul className="pin">
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>
                        </ul>
                </ul>
                <ul className="pin">
                    <li>**Bachelor of Commerce (B.Com)**</li>
                        <ul className="pin">
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                </ul>
                <ul className="pin">
                    <li>**Bachelor of Arts (B.A.)**</li>
                        <ul className="pin">
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                </ul>
                <h1 className="max">Postgraduate Program</h1>
                <hr></hr>
                <ul className="pin">
                    <li>**Master of Science (M.Sc.)**</li>
                     <ul className="pin">
                         <li>Computer Science (2 years)</li>
                         <li>Information Technology (2 years)</li>
                     </ul>
                    <li>**Master of Commerce (M.Com)** (2 years)</li>
                    <li>**Master of Arts (M.A.)** (2 years)</li>
                </ul>
                <h1 className="max">Specialized & Vocational Courses</h1>
                <hr></hr>
                <p className="p">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
                <p>Explore detailed syllabi and admission criteria on our Admissions page.</p>
                <button className="button">Inquire About Courses</button>
            </div>
            <Footer/>{/*@2025 Vivekanand College. All rights reserved*/}
        </div>
    )
}

export default Courses
        