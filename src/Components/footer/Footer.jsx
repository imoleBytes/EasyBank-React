import Logo from "../../assets/footer-logo.svg"
import Fb from "../../assets/icon-facebook.svg"
import yt from "../../assets/icon-youtube.svg"
import tw from "../../assets/icon-twitter.svg"
import pn from "../../assets/icon-pinterest.svg"
import ig from "../../assets/icon-instagram.svg"

import "./footer.css"

 
const Footer = () => {
    return (
    <footer>
        <div className="container footer">
            <div className="footer__left">
                <div className="icons">
                    <img src={Logo} alt="logo" />
                    <ul className="social_icons">
                        <li><a href=""><img src={Fb} alt="facebook" /></a></li>
                        <li><a href=""><img src={yt} alt="youtube" /></a></li>
                        <li><a href=""><img src={tw} alt="twitter" /></a></li>
                        <li><a href=""><img src={pn} alt="pinterest" /></a></li>
                        <li><a href=""><img src={ig} alt="instagram" /></a></li>

                    </ul>
                </div>

                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Blog</a></li>
                </ul>

                <ul>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Support</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ul>

            </div>
            <div className="footer__right">
                <a href="" className="btn">Request Invite</a>
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </div>
    </footer>
    )
    
}

export default Footer