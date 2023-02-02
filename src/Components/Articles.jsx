import Currency from "../assets/image-currency.jpg";
import Restaurant from "../assets/image-restaurant.jpg"
import Plane from "../assets/image-plane.jpg"
import Confetti from "../assets/image-confetti.jpg"



const Article = ({data}) => {
    return (
        <article>
            <img src={data.image} alt="" />
            <div className="article__body">
                <p>By {data.author}</p>
                <h3>{data.title}</h3>
                <p>{data.paragraph}</p>
            </div>
        </article>
    )
}

const articlesData = {
    one: {
        image: `${Currency}`,
        author: "Claire Robinson",
        title: "Receive money in any currency with no fees",
        paragraph: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
    },
    two: {
        image: `${Restaurant}`,
        author: "Wilson Hutton",
        title: "Treat yourself without worrying about money",
        paragraph: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
    },
    three: {
        image: `${Plane}`,
        author: "Wilson Hutton",
        title: "Take your Easybank card wherever you go",
        paragraph: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
    },
    four: {
        image: `${Confetti}`,
        title: "Our invite-only Beta accounts are now live!",
        author: "Claire Robinson",
        paragraph: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
    }
}

const Articles = () => {
    return (
    <section>
        <h2>Latest Articles</h2>
        <div className="cards">
            <Article data ={articlesData.one}  />
            <Article data ={articlesData.two}  />
            <Article data ={articlesData.three}  />
            <Article data ={articlesData.four}  />
        </div>

    </section>

    )
    
}

export default Articles