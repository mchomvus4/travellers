import React from 'react';
import './NavBar.css';
function NavBar() {
    return (
       
        <div className="container">
        <header>
            <nav>
                <div className="row">
                    <h4>
                        <span className="logo">LOGO</span>
                        <span className="design">DESIGN</span>
                        </h4>
                        <div className="openMenu"><i className="fa fa-bars bar-icon"></i></div>
                    <ul className="main-nav">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#home">Services</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#login">Login</a></li>
                        </ul>       
                </div>
            </nav>
            <div className="travel-text-box">
                <h2 className="travel">travel agency</h2>
                <h1 className="journey">enjoy your journey with us</h1>
                <p className="ipsum-header">Lorem Ipsum is simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum has been the industry's standard </p>
                    <br/>
                <a className="btn-btn-contact" href="#contact">Contact Us</a>
            </div>
            </header>
            
        </div>
       
    )
}

export default NavBar
