import React, { useState } from 'react'
import Options from './Options';


const Question = ({data}) => {

    return (
        <div>
            <h4>{data.question}</h4>
            <Options data={data} />
        </div>
    )
}

export default Question

