import { Link } from "react-router-dom"
import '../CSS/navbar.css'
import Team_logo from "../assets/Team_logo.jpg"
import {SignInButton, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
    return (
        <div className="container-navbar">
            <header>
                <div className='navbar'>
                    <img className="logo" src={Team_logo} alt="Logo" />
                    <Link to="/"><button className="nav-btn">HOME</button></Link>
                    <Link to="/courses"><button className="nav-btn">COURSES</button></Link>
                    <Link to="/mentor"><button className="nav-btn">MENTORS</button></Link>
                    <Link to="/about"><button className="nav-btn">ABOUT US</button></Link>
                    <Link to="/career"><button className="nav-btn">COUNSELLOR</button></Link>
                    <Link to="/tests"><button className="nav-btn">TESTS</button></Link>
                    <Link to="/champions_portal"><button className="nav-btn">CHAMPIONS PORTAL</button></Link>
                    <Link to="/resources"><button className="nav-btn">RESOURCES</button></Link>
                    <Link to="/jobs"><button className="nav-btn">JOBS</button></Link>
                    <SignInButton className="l" mode="modal" redirectUrl="/courses"/>
                    <UserButton/>
                </div>
            </header>
        </div>
    )
}

export default Navbar