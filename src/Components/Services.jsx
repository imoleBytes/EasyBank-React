import Online from "../assets/icon-online.svg";
import Budgeting from "../assets/icon-budgeting.svg";
import Onboarding from "../assets/icon-onboarding.svg";
import Api from "../assets/icon-api.svg";



const Card = ({data}) => {
    return (
    <div className="card">
        <img src={data.icon} alt="" />
        <h3>{data.title}</h3>
        <p>{data.paragraph}
        </p>
    </div>
    )
    
};

const servicesData = {
    one: {
        icon: `${Online}`,
        title: "Online Banking",
        paragraph: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
    },
    two: {
        icon: `${Budgeting}`,
        title: "Simple Budgeting",
        paragraph: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."
    },
    three: {
        icon: `${Onboarding}`,
        title: "Fast Onboarding",
        paragraph: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away."
    },
    four: {
        icon: `${Api}`,
        title: "Open API",
        paragraph: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
    }
}

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
             <Card data={servicesData.one} />      
             <Card data={servicesData.two} />  
             <Card data={servicesData.three} />  
             <Card data={servicesData.four} />              
            </div>
        </div>
    </section>
    )
}

export default Services