
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
export default Article