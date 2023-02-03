import Logo from "../../assets/logo.svg"

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

                    <a href="">Request Invite</a>

                    <div className="menuHamburger">
                        {/* <img src="" alt="" /> */}
                        <h2>M</h2>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header