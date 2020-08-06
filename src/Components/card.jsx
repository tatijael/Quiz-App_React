import React from 'react'
import {Link} from 'react-router-dom'

const Card = (props) => {
    return (

    <Link to={`/questions/${props.id}`}>
    <div className="card" style={{width: "18rem"}}>
        <img src={props.src} className="card-img-top" alt="Category"/>
    <p className="name">{props.name}</p>
    </div>
    </Link>
    
    )
}

export default Card;
