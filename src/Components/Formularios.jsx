import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import Axios from 'axios'

const Formularios =()=> {
    const [form, setForm] = useState({})
    const handleOnSubmit = (event) =>{
        event.preventDefault();
        console.log("Estoy enviando formulario", event)
         event.preventDefault();

        let id = 2;

        Axios
        .post(`https://5f26fcaf0824d8001655edd9.mockapi.io/categories/${id}/questions`, 
        {
            "categoryId": id,
            "options": {
                "a": "Un lenguaje de Programacion",
                "b": "Un framework",
                "c": "Una libreria de Javascript"
            },
            "answer": "c",
            "question": "¿Qué es React?"
        })
        .then((data)=>{
            console.log(data.data)
        })
    }

    return (
        <div>
            <Link to="/admin/"> 
            <h2>Agregar Preguntas</h2>
            <form onSubmit={handleOnSubmit}>
                <div name="categoryId" className="form-group">
                    <select defaultValue="1" className="custom-select">
                        <option value="1" selected>Matematica</option>
                        <option value="2">Programacion</option>
                        <option value="3">Quimica</option>
                        <option value="4">Cine</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">PREGUNTA</label>
                    <input type="text" className="form-control" name="question" id="exampleInputPassword2" />
                    <small id="emailHelp" className="form-text text-muted">Ingrese Pregunta</small>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Opciones :</label>
                    <input type="text" className="form-control" name="a" id="formGroupExampleInput" placeholder="Opcion a"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="b" id="formGroupExampleInput2" placeholder="Opcion b"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="c" id="formGroupExampleInput2" placeholder="Opcion c"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="d" id="formGroupExampleInput2" placeholder="Opcion d"/>
                </div>
                <div className="form-group">
                <label htmlFor="formGroupExampleInput">Opcion Correcta :</label>
                    <select name="answer" defaultValue="2" className="custom-select">
                        <option value="1" selected>Opcion a</option>
                        <option value="2">Opcion b</option>
                        <option value="3">Opcion c</option>
                        <option value="4">Opcion d</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" /> 
                {/*<button type="button" onClick={handleOnSubmit} className="btn btn-primary"
                >Enviar</button>*/}
            </form>
            </Link>  
        </div>
    )
}

export default Formularios
