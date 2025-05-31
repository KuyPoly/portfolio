import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <nav className="navbar">
            <img src="./KP.png" alt="Logo" className="navbar-logo" />
            <div className="desktop-menu">
                <Link className="desktop-menu-list" activeClass='active' to="intro"  smooth={true} offset={-100} spy={true} duration={500}>Home</Link>
                <Link className="desktop-menu-list" activeClass='active' to="skill" smooth={true} offset={-60} spy={true} duration={500}>About</Link>
                <Link className="desktop-menu-list" activeClass='active' to="work" smooth={true} offset={-87} spy={true} duration={500}>Portfolio</Link>
            </div>
            <button className="desktop-menu-btn" onClick={() => 
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
            }>
                Contact Me
            </button>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list mob-menu" viewBox="0 0 16 16" onClick={() => setShowMenu(!showMenu)}>
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
            <div className="mobile-menu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link className="mobile-menu-list" activeClass='active' to="intro"  smooth={true} offset={-100} spy={true} duration={500} onClick={() => setShowMenu(false)}>Home</Link>
                <Link className="mobile-menu-list" activeClass='active' to="skill" smooth={true} offset={-60} spy={true} duration={500} onClick={() => setShowMenu(false)}>About</Link>
                <Link className="mobile-menu-list" activeClass='active' to="work" smooth={true} offset={-87} spy={true} duration={500} onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link className="mobile-menu-list" activeClass='active' to="contact" smooth={true} offset={-87} spy={true} duration={500} onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;