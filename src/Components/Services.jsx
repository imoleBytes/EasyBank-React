import { servicesData } from "./data"
import Service from "./Service"


const Services = () => {
    return (
    <section className="services">
        <div className="container">
            <h2>Why choose Easybank?</h2>
            <p>
            We leverage Open Banking to turn your bank account into your financial hub. Control 
            your finances like never before.
            </p>
            <div className="cards">
                {servicesData.map((service, index) => {
                    return <Service data={service} key = {index}/>
                })}                      
            </div>
        </div>
    </section>
    )
}

export default Services