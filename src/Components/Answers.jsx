import React from 'react'
import { Link } from 'react-router-dom'

const Answers = ({answers}) => {



    return (
        <div>
            <h2>Resultados</h2>
            <hr />
            {answers.map(answer=>{
            return  <h1>{answer.pregunta} {answer.resultado?"Bien":"Mal"}</h1>
            })}
            <Link to="/"> Jugar De Nuevo </Link>
        </div>
    )
}

export default Answers
