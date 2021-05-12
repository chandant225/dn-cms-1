import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [activemenu, setactiveMenu] = useState(1);
    const [showScroller, setshowScroller] = useState(false)
    const toggleactiveMenu = (item) => {
        setactiveMenu(item)
    }
    function openNav() {
        document.getElementById("mySidepanel").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidepanel").style.width = "0";
    }
    window.onscroll = function () {
        scrollFunction();
        showScrollBtn();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 85 || document.documentElement.scrollTop > 85) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-70px";
        }
    }


    function showScrollBtn() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            setshowScroller(true);
        } else {
            setshowScroller(false);
        }
    }
    const ScrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <div className="header-wrapper">
            <div id="navbar">
                <div className="container-fluid">
                    <div style={{ position: 'relative' }} className="row">
                        <div className="col-lg-4">
                            <Link to="/">
                                <div className="brand-logo">
                                    <img src="logo-white.png" alt='dn-logo' />
                                </div>
                            </Link>
                            <span onClick={openNav} className="toggle-icon"><i className="fas fa-sliders-h"></i></span>
                        </div>
                        <div className="col-lg-8">
                            <nav className="nav-wrapper">
                                <ul>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(1)
                                        }} className={activemenu === 1 ? "menu-item active" : "menu-item"} to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(2)
                                        }} className={activemenu === 2 ? "menu-item active" : "menu-item"} to="/aboutus">About us</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(3)
                                        }} className={activemenu === 3 ? "menu-item active" : "menu-item"} to="/facilities">facilities</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(4)
                                        }} className={activemenu === 4 ? "menu-item active" : "menu-item"} to="/">Admission</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(5)
                                        }} className={activemenu === 5 ? "menu-item active" : "menu-item"} to="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(6)
                                        }} className={activemenu === 6 ? "menu-item active" : "menu-item"} to="/blogs">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(7)
                                        }} className={activemenu === 7 ? "menu-item active" : "menu-item"} to="/events">events</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(8)
                                        }} className={activemenu === 8 ? "menu-item active" : "menu-item"} to="/notices">notice </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', backgroundColor: '#424242', color: '#f5f5f5' }} className="hide-on-med-and-down">
                <div className="left-container">
                    <p><i className="fas fa-envelope"></i>   dakshyaNepal@gmail.com</p>
                    <p><i className="fas fa-phone"></i> 9881336356</p>
                </div>
                <div className="right-container">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                </div>
            </div>
            <div className="navigation-header">
                <div className="container-fluid">
                    <div style={{ position: 'relative' }} className="row">
                        <div className="col-lg-4">
                            <Link to="/">
                                <div className="brand-logo">
                                    <img src="logo-white.png" alt='dn-logo' />
                                </div>
                            </Link>
                            <span onClick={openNav} className="toggle-icon"><i className="fas fa-sliders-h"></i></span>
                        </div>
                        <div className="col-lg-8">
                            <nav className="nav-wrapper">
                                <ul>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(1)
                                        }} className={activemenu === 1 ? "menu-item active" : "menu-item"} to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(2)
                                        }} className={activemenu === 2 ? "menu-item active" : "menu-item"} to="/aboutus">About us</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(3)
                                        }} className={activemenu === 3 ? "menu-item active" : "menu-item"} to="/facilities">facilities</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(4)
                                        }} className={activemenu === 4 ? "menu-item active" : "menu-item"} to="/">Admission</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(5)
                                        }} className={activemenu === 5 ? "menu-item active" : "menu-item"} to="/gallery">Gallery</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(6)
                                        }} className={activemenu === 6 ? "menu-item active" : "menu-item"} to="/blogs">Blogs</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(7)
                                        }} className={activemenu === 7 ? "menu-item active" : "menu-item"} to="/events">events</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => {
                                            toggleactiveMenu(8)
                                        }} className={activemenu === 8 ? "menu-item active" : "menu-item"} to="/notices">notice </Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div id="mySidepanel" className="sidepanel">
                <span className="closebtn" onClick={closeNav}>×</span>
                <Link style={{ marginTop: '35px' }} to="/">Home</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/facilities">Facilities</Link>
                <Link to="#">Admission</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/events">Events</Link>
                <Link to="/notices">Notice</Link>
            </div>
            <div id="scrollTo-btn" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "999", borderRadius: "50%", background: "crimson", width: "4%", textAlign: "center", padding: "8px" }} className={showScroller ? "scroll-btn active" : "scroll-btn"}>
                <span style={{ color: "white" }} onClick={() => {
                    ScrollToTop();
                }}><i style={{ fontSize: "35px" }} class="fas fa-angle-double-up"></i></span>
            </div>
        </div>

    );
}

export default Header;