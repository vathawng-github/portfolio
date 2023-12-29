import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import { FaSquare } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

import { CiLinkedin } from "react-icons/ci";


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className = "navLeft">
                <FaSquare/>
                <BiSolidRightArrow />
                <a href={"/"}><p>VXFX</p></a>
            </div>
            <div className='desktopMenu'>
                <a className = "desktopMenuListItem" href={"/"}>Home</a>
                <a className = "desktopMenuListItem" href={"/Projects"}>Projects</a>
                <a className = "desktopMenuListItem" href={"/About"}>About</a>
            </div>
        </nav>
    )
}

export default Navbar;