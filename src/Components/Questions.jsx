import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios';

const Questions = () => {
    const [questions, setQuestions] = useState();

    const {id} = useParams();

    useEffect(() =>{
        Axios
            .get(`https://5f26fcaf0824d8001655edd9.mockapi.io/categories/${id}/questions`)
            .then((response) => {
                console.log("soy el response", response)
                setQuestions(response.id)
            })
    },[])

    return (
    <div>
    </div>
    )
}

export default Questions
