import React, { useState } from 'react'
import Options from './Options';


const Question = ({data}) => {
    const [selected, setSelected] = useState([]);
    
    
    const validate = (event) => {
        console.log("soy el target", event.target)
        setSelected(event.target.name)
    }

    return (
        <div>
            <h4>{data.question}</h4>
            <Options data={data} validate={validate} selected={selected}/>
        </div>
    )
}

export default Question

