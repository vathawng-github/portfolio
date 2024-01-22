import React from "react";
import "./Intro.css";
import Headshot from "../../assets/headshot.jpg";
import { Link } from "react-scroll";
import { FaSuitcase } from "react-icons/fa";

const Intro = () => {
    return (
        <div>
            <section id = "intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Van Bawi</span> <br />UX/UI Design & Web Developer</span>
                    <p className="introPara">I design and build applications and interfaces using modern web technologies.</p>
                    <br /><br />
                    <p className="closingPara">Designed in Adobe XD and coded In VS Code. Powered by React and deployed with Vercel.</p>
                </div>
                <img src = {Headshot} alt = "headshot" className="bg" id = "me"/>
            </section>
        </div>
    )
}

export default Intro;