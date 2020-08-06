import React from "react"
import Options from './Options';


const Question = ({data, next, agregarRespuesta}) => {

    return (
        <div className="container-questions">
            <h4 className="question">{data.question}</h4>
            <div className="container-options">
                <Options 
                data={data} 
                next={next} 
                agregarRespuesta={agregarRespuesta} 
                />
            </div>
        </div>
    )
}

export default Question

