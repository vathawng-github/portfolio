import React from "react";
import "./Contact.css";
import Headshot from "../../assets/headshot.jpg";
import { Link } from "react-scroll";
import { FaSuitcase } from "react-icons/fa";
import { useEffect } from "react";


import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div>
            <section id = "Contact">
                <div className="contactSection">
                    <h2>Get in Touch</h2>
                    <div className="divider"></div>
                    <div className="contactInfo">
                        <p className="desc">
                            Hello! Thank you for visiting. I'd love to hear from you. Whether you have questions, collaboration ideas, or just want to connect, feel free to contact me! Your thoughts matter, and I look forward to getting in touch with you soon!
                        </p>
                        <div className="connect">
                            <a href = "www.linkedin.com/in/vanbawi-thawng-426010206">
                                <CiLinkedin />
                            </a>
                            <a><MdOutlineEmail /><p className="email">:vathawng.career@gmail.com</p></a>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;