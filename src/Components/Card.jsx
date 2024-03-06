import "../Components/Card.css"


function Card({title, text, img}) {
    return (
        <div className="card">
            <img src={img} alt="img" className="card-img"/>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{text}</p>
        </div>
    )
}

export default Card