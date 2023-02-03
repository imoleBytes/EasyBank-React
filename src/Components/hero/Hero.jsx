import mockup from "../../assets/image-mockups.png"


const Hero = () => {
    return (
    <section className="hero">
        <div className="container">
            <div className="hero__left">
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop 
                    for spending, saving, budgeting, investing, and much more.</p>
                <a href="" className="btn">Request Invite</a>
            </div>
            <div className="hero__right">
                <img src={mockup} alt="" />
            </div>
        </div>
    </section>
    )
    
}

export default Hero