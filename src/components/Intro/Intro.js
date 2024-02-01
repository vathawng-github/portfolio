import React from "react";
import "./Intro.css";
import Headshot from "../../assets/headshot.jpg";
import { Link } from "react-scroll";
import { FaSuitcase } from "react-icons/fa";

import gsap from "gsap";
import { useRef, useEffect } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

    const imgRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const el = imgRef.current;
        gsap.fromTo(el, {opacity: 0},{duration: 3, opacity: 1});
    }, []);

    useEffect(() => {
        const el = textRef.current;
        gsap.fromTo(el, {opacity: 0},{duration: 3, opacity: 1});
    })

    return (
        <div>
            <section id = "intro">
                <div className="introContent" ref = {textRef}>
                    <span className="hello">Hello,</span>
                    <span className="introText">I'm <span className="introName">Van Bawi</span> <br />UX/UI Design & Web Developer</span>
                    <p className="introPara">I design and build applications and interfaces using modern web technologies.</p>
                    <br /><br />
                    <p className="closingPara">Designed in Adobe XD and coded In VS Code. Powered by React and deployed with Vercel.</p>
                </div>
                <img src = {Headshot} alt = "headshot" className="bg" id = "me" ref = {imgRef}/>
            </section>
        </div>
    )
}

export default Intro;