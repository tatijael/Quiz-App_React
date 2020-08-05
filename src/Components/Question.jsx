import React from "react"
import Options from './Options';


const Question = ({data, next}) => {

    return (
        <div className="container-questions">
            <h4>{data.question}</h4>
            <Options data={data} next={next} />
        </div>
    )
}

export default Question

