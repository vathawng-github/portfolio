import React from "react";
import "./About.css";
import Headshot from "../../assets/headshot.jpg";
import { Link } from "react-scroll";
import { FaSuitcase } from "react-icons/fa";

import CEBC from "../../assets/cebclogo.png";
import Biakttheng from "../../assets/biakttheng.png";
import PCH from "../../assets/pch.png";


const About = () => {
    return (
        <div>
            <section id = "about">
                <div className="aboutContent">
                    <div className="row">
                        <h3>About Me</h3>
                        <div className="divider"></div>
                        <p className="desc">👋 Hey there! I'm Van Bawi, a passionate web developer with a knack for turning ideas into digital reality. My journey in the world of coding began when I started my degree in Web Development at IUPUI. Over the years, I've honed my skills in MERN stack applications, UX / UI Design, and I thrive on tackling challenging projects that push my creative and technical boundaries. <br /><br />
                        
                        🚀 Whether it's crafting responsive and user-friendly interfaces or diving into the backend to optimize performance, I love the dynamic nature of web development. I've had the privilege of working on numerous projects in school and internships, where I both developed and designed user friendly and visually appealing applications with the latest web technologies. <br /><br/>

                        🌐 Outside of coding, you'll likely find me exploring the latest web development / design trends, experimenting with new technologies, or engaging with the vibrant tech community. I'm all about continuous learning and staying updated with the ever-evolving web landscape. <br /><br />

                        Let's collaborate and bring your digital ideas to life! Feel free to reach out at vathawng.career@gmail.com or connect with me on <a href = "www.linkedin.com/in/vanbawi-thawng-426010206" className="link">LinkedIn.</a></p> <br /> 
                        <h3>Organizations</h3>
                        <div className="divider"></div>
                        <div className = "horizontal">
                            <div className="col-sm">
                                <img src = {PCH} alt = "projectChinHills" className="orgs"/>
                                <h4>Project Chin Hills</h4>
                                <p className="desc"><strong>Position: </strong>Web Content Designer</p>
                                <p className="desc"><strong>Website: </strong><a href = "https://www.projectchinhills.org/" className="link">Project Chin Hills</a></p>

                            </div>
                            <div className="col-sm">
                                <img src = {Biakttheng} alt = "Biakttheng Music" className="orgs"/>
                                <h4>Biakttheng Music</h4>
                                <p className="desc"><strong>Position: </strong>Music Director</p>
                                <p className="desc"><strong>Instagram: </strong><a href = "https://www.instagram.com/biaktthengmusic/" className="link">Biakttheng Music</a></p>
                            </div>
                            <div className="col-sm">
                                <img src = {CEBC} alt = "CEBC Music" className="orgs"/>
                                <h4>CEBC Music Ministry</h4>
                                <p className="desc"><strong>Position: </strong>Band Leader</p>
                                <p className="desc"><strong>Instagram: </strong><a href = "https://www.instagram.com/cebcmusic/" className="link">CEBC Music</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;