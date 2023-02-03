import { useState } from "react"



import Logo from "../../assets/logo.svg"
import Hamburger from "../../assets/icon-hamburger.svg"
import CloseIcon from "../../assets/icon-close.svg"
import "./header.css"



const menu = (
    <ul className="mobile">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Careers</a></li>
    </ul>
)

const Header = () => {
    const [menuClicked, setmenuClicked] = useState(false);
    return (
        <header>
            <div className="container navbar">                
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                
                <nav>
                    { menuClicked && menu }  

                    <ul className="desktopMenu">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>                  
                    <a href="" className="btn">Request Invite</a>

                    <div className="menuIcon" onClick={() =>{setmenuClicked(v=>!v)}}>
                        <img src={ menuClicked ? CloseIcon : Hamburger} alt="menu" />
                        
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header