import mockup from "../../assets/image-mockups.png"
import "./hero.css"


const Hero = () => {
    return (
    <section className="hero">
        <div className="container">

        <div className="hero__img">
            <img src={mockup} alt=""  />
        </div>
            
        <div className="hero__text">
            <h1>Next generation digital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>
            <a href="" className="btn">Request Invite</a>
        </div>
            
        </div>
    </section>
    )
    
}

export default Hero