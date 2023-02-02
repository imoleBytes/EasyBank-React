import React from "react";
import reactLogo from '../assets/react.svg'
import Logo from "../assets/logo.svg"

const Header = () => {
    return (
        <header>
            <div className="container navbar">                
                <div className="logo">
                <img src={Logo} alt="logo" />
                </div>
                
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Careers</li>
                    </ul>
                </nav>

                <a href="">Request Invite</a>
            </div>
        </header>
    )
}

export default Header