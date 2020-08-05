import React from "react"
import Options from './Options';


const Question = ({data, next, agregarRespuesta}) => {

    return (
        <div className="container-questions">
            <h4>{data.question}</h4>
            <Options data={data} next={next} agregarRespuesta={agregarRespuesta} />
        </div>
    )
}

export default Question

