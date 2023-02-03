import { articlesData } from "../data"; 
import Article from "./Article";


const Articles = () => {
    return (
    <section>
        <div className="container">
            <h2>Latest Articles</h2>
            <div className="cards">
                {
                    articlesData.map(( article, index ) => {
                        return <Article data={article} key={index} />
                    })
                }
            </div>
        </div>        
    </section>
    )
    
}

export default Articles