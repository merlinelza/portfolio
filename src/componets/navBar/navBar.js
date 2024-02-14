import React, { useState } from 'react';
import './navBar.css';
import logoM from '../../logo/logoM.png';
import menu from '../../logo/menu.png';
import contact from '../../logo/contact.png';
import resume from '../../Merlin_cv.pdf';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleResumeDownload = (e) => {
        const confirmDownload = window.confirm(
            'Are you sure you want to download the resume?'
        );
        if (!confirmDownload) {
            e.preventDefault();
        }
    };

    return (
        <nav className="navbar">
            <img src={logoM} alt="logo" className="logo" />
            <div className="desktopMenu">
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Portfolio
                </Link>
                <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="desktopMenuListItem"
                >
                    Projects
                </Link>
                <a
                    href={resume}
                    download="Merlin_cv.pdf"
                    className="desktopMenuListItem"
                    onClick={handleResumeDownload}
                >
                    Resume
                </a>
            </div>
            <Link
                activeClass="active"
                to="contactMe"
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
            >
                <button className="desktopMenuBtn">
                    <img src={contact} alt="" className="desktopMenuImg" />
                    Contact Me
                </button>
            </Link>

            <img
                src={menu}
                alt="menu"
                className="mobMenu"
                onClick={() => setShowMenu(!showMenu)}
            />
            <div
                className="navMenu"
                style={{ display: showMenu ? 'flex' : 'none' }}
            >
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Home
                </Link>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    About
                </Link>
                <Link
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Portfolio
                </Link>
                <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Projects
                </Link>
                <a
                    href={resume}
                    download="Merlin_cv.pdf"
                    className="listItem"
                    onClick={handleResumeDownload}
                >
                    Resume
                </a>
                <Link
                    activeClass="active"
                    to="contactMe"
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                    className="listItem"
                    onClick={() => setShowMenu(false)}
                >
                    Contact Me
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
