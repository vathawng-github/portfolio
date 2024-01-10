import React from "react";
import "./Projects.css";
import Headshot from "../../assets/headshot.jpg";
import { Link } from "react-scroll";
import { FaSuitcase } from "react-icons/fa";

// import Video from "react-native-video";
// import { View } from "react-native";
import AuxIndexVid from "../../assets/projects/Aux-IndexVid.mp4";
import DonationVid from "../../assets/projects/donationPal.mp4";
import PokemonVid from "../../assets/projects/pokemon.mp4";
import linkedInVid from "../../assets/projects/linkedIN.mp4";
import SkyHigh from "../../assets/projects/SkyHigh.mp4";


const Projects = () => {
    return (
        <div>
            <section id = "projects">
                <div className="projectContent">
                    <div>
                        <div className="row">
                            <h3>UX/UI Design</h3>
                            <div className="divider"></div>
                            <div className="projectSection">
                                <div className="projectLeft">
                                    <video width = "620" height = "450" controls id = "auxIndex">
                                        <source src={AuxIndexVid} type = "video/mp4" />
                                    </video>
                                </div>
                                <div className="projectRight">
                                    <h4>IUPUI Department of Auxiliary Services</h4>
                                    <p className="desc"><strong>Date: </strong>June 2023</p>
                                    <p className="desc"><strong>Project Type: </strong>Website Re-Design</p>
                                    <p className="desc"><strong>Description: </strong>To stay relevant and ensure a positive user experience, a redesign is essential. A modern, responsive design not only enhances aesthetics but also reflects a commitment to remaining current in a dynamic online environment. Embracing contemporary trends is key to capturing and retaining audience attention. Therefore, during my time at IUPUI's Department of Auxiliary Services, I introduced a new design that incorporates modern aesthetics and optimizes a seamless and engaging experience.</p>
                                    <p className="desc"><strong>Adobe XD: </strong><a href ="https://xd.adobe.com/view/7b180b26-cc15-40fe-ab91-35948a2eb0b9-2e4b/" className="link">Aux Services</a></p>
                                </div>
                            </div>
                            <div className="projectSection">
                                <div className="projectLeft">
                                    <video width = "620" height = "450" controls id = "auxIndex">
                                        <source src={linkedInVid} type = "video/mp4" />
                                    </video>
                                </div>
                                <div className="projectRight">
                                    <h4>LinkedIn World</h4>
                                    <p className="desc"><strong>Date: </strong>April 2023</p>
                                    <p className="desc"><strong>Project Type: </strong>Website & Branding Design</p>
                                    <p className="desc"><strong>Description: </strong>LinkedIn World is a mock company that I created for an assignment in my Creative Design course. As the designer, I created a visually appealing and user-friendly mock website. Defining our brand with colors, typography, and imagery, I ensured seamless navigation across devices. Engaging content tailored to our audience and rigorous usability testing will refine the site for optimal performance. Staying true to LinkedIn World's vision, I aimed for a compelling and impactful design.</p>
                                    <p className="desc"><strong>Behance: </strong><a href ="https://www.behance.net/gallery/169421149/LinkedIn-World" className="link">LinkedIn World</a></p>
                                </div>
                            </div>
                            <div className="projectSection">
                                <div className="projectLeft">
                                    <video width = "620" height = "450" controls id = "auxIndex">
                                        <source src={SkyHigh} type = "video/mp4" />
                                    </video>
                                </div>
                                <div className="projectRight">
                                    <h4>SkyHigh</h4>
                                    <p className="desc"><strong>Date: </strong>March 2023</p>
                                    <p className="desc"><strong>Project Type: </strong>Website & Branding Design</p>
                                    <p className="desc"><strong>Description: </strong>Welcome to SkyHigh, where seamless travel experiences meet unbeatable discounts! As the UX/UI designer behind this company, I've crafted an intuitive interface that effortlessly guides you through our curated travel plans. From luxurious accommodations to exclusive excursions, every detail is designed for your ease. Enjoy an accessible and exceptional journey with SkyHigh—where your travel dreams take flight.</p>
                                    <p className="desc"><strong>Figma: </strong><a href ="https://www.figma.com/proto/2jw5FWCzl2adpo4nEX8pJH/SkyHigh_WebDesign?page-id=0%3A1&type=design&node-id=1-2&viewport=724%2C245%2C0.2&t=bg8cnDb9myTjU2qm-1&scaling=min-zoom&mode=design" className="link">SkyHigh</a></p>
                                </div>
                            </div>
                            <br />
                            <h3>Web Development</h3>
                            <div className="divider"></div>
                            <div className="projectSection">
                                <div className="projectLeft">
                                    <video width = "620" height = "450" controls id = "auxIndex">
                                        <source src={PokemonVid} type = "video/mp4" />
                                    </video>
                                </div>
                                <div className="projectRight">
                                    <h4>Pokemon Index</h4>
                                    <p className="desc"><strong>Date: </strong>May 2023</p>
                                    <p className="desc"><strong>Project Type: </strong>Website Design & Development</p>
                                    <p className="desc"><strong>Description: </strong>Pokemon Index, a MERN stack application, is your ultimate Pokemon resource. Using MongoDB, Express.js, React, and Node.js, it delivers a seamless and dynamic experience. The React-based frontend offers an intuitive Pokemon database for easy exploration and information retrieval. MongoDB ensures secure data storage, and the application's real-time updates and responsive design cater to both casual fans and dedicated trainers. Pokemon Index is your go-to hub for discovering and enjoying the expansive world of Pokemon.</p>
                                    <p className="desc"><strong>GitHub: </strong><a href = "https://github.com/vathawng-github/pokemonIndex" className="link">Pokemon Index</a></p>
                                </div>
                            </div>
                            <div className="projectSection">
                                <div className="projectLeft">
                                    <video width = "620" height = "450" controls id = "auxIndex">
                                        <source src={DonationVid} type = "video/mp4" />
                                    </video>
                                </div>
                                <div className="projectRight">
                                    <h4>DonationPal</h4>
                                    <p className="desc"><strong>Date: </strong>December 2022</p>
                                    <p className="desc"><strong>Project Type: </strong>Website Design & Development</p>
                                    <p className="desc"><strong>Description: </strong>DonationPal is a dynamic MERN stack application designed for efficient and transparent charitable contributions. Utilizing MongoDB, Express.js, React, and Node.js, the platform ensures a user-friendly experience. The streamlined interface, powered by React, simplifies the donation process, while Express.js handles server-side functionalities seamlessly. MongoDB securely stores and retrieves donation data, providing transparency and accountability. DonationPal offers real-time updates, fostering trust and enabling users to make a meaningful impact effortlessly.</p>
                                    <p className="desc"><strong>GitHub: </strong><a href = "https://github.com/vathawng-github/donationPal" className="link">DonationPal</a></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects;