import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import Question from './Question';
import Answers from './Answers';
import Loader from 'react-loader-spinner'

const Questions = () => {
    const [questions, setQuestions] = useState(null);
    const [indice, setIndice] = useState(0)
    const [answers, setAnwers] = useState([])

    const {id} = useParams();

    useEffect(() =>{
        Axios
            .get(`https://5f26fcaf0824d8001655edd9.mockapi.io/categories/${id}/questions`)
            .then((response) => {
                setQuestions(response.data)
            })
    },[id])

    const next = () => {
        if(indice < questions.length) {
            setIndice(indice + 1)
        }
    }
    
    const  agregarRespuesta = (resultado)=>{
        setAnwers([...answers,{pregunta:indice + 1, resultado}])
    }
        if(!questions){
        return (
            <Loader type="Puff" color="#00BFFF" height={80} width={80} />
        )
    }

        if(questions && indice<questions.length){

    return (
        <div>
            {questions && <Question data={questions[indice]} next={next} agregarRespuesta={agregarRespuesta}/>}
        </div>
            )
    }
    return (
            <Answers answers={answers}/>
    )
}

export default Questions
