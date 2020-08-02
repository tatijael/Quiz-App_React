import React from 'react'

const Card = (props) => {
    return (
    <div className="card" style={{width: "18rem"}}>
        <img src={props.src} className="card-img-top" alt="..."/>
        <div className="card-body">
    <button className="btn btn-primary">{props.name}</button>
        </div>
    </div>
    )
}

export default Card;
