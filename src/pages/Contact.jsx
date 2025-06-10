import React from "react";
import './Contact.css'
import { Link } from "react-router-dom";
import Header from "../components/Headers/Header";
import Footer from "../components/Footers/Footer";

const Contact=() =>{
    return(
        <div className="scroll">
            <Header/>
            <div>
                <h1 className="h1">Contact Us</h1>
                <p className="p">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
                <h1 className="max">General Enquiries</h1>
                <h4 className="p">Vivekanand College Main Campus</h4>
                <p className="p">[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                India<br></br>

                Phone: **+91 12345 67890**<br></br>
                Email: **info@vivekanandcollege.edu**<br></br>
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
                <h1 className="max">Admission Office</h1>  
                <p className="p">For all admission-related queries regarding undergraduate or postgraduate programs:<br></br>
                Phone: +91 98765 43210<br></br>
                Email: admissions@vivekanandcollege.edu</p>
                <h1 className="max">Student Support Services</h1>
                <p className="p">For current student support, academic advising, or general assistance:<br></br>
                Phone: +91 87654 32109<br></br>
                Email: studentsupport@vivekanandcollege.edu</p>
                <h1 className="max">Find Us on the Map</h1>
                <p className="p">[You can embed a Google Map here later using an iframe or a React map library.]</p>
                <a className="a"href="https://maps.google.com/?q=Vivekanand+College">View on Google Map</a>
                <h1 className="max">Send Us</h1>
            </div>
            <Footer/>{/*@2025 Vivekanand College. All rights reserved*/}
        </div>
    )
}

export default Contact