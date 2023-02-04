const Service = ({data}) => {
    return (
    <div className="card">
        <img src={data.icon} alt={data.title} />
        <h3>{data.title}</h3>
        <p>{data.paragraph}</p>
    </div>
    )
}

export default Service;  