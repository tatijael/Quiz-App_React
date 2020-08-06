import React from 'react'
import {Link} from "react-router-dom"

function Formularios() {
    return (
        <div>
            <Link to="/admin/"> 
            <h2>Agregar Preguntas</h2>
            <form>
                <div class="form-group">
                    <select class="custom-select">
                        <option selected>Elegi la Categoria</option>
                        <option value="1">Matematica</option>
                        <option value="2">Programacion</option>
                        <option value="3">Quimica</option>
                        <option value="4">Cine</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword2">PREGUNTA</label>
                    <input type="text" class="form-control" id="exampleInputPassword2" />
                    <small id="emailHelp" class="form-text text-muted">Ingrese Pregunta</small>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Opciones :</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Opcion a"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Opcion b"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Opcion c"/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Opcion d"/>
                </div>
                <div class="form-group">
                <label for="formGroupExampleInput">Opcion Correcta :</label>
                    <select class="custom-select">
                        <option selected>Seleccione opción Correcta</option>
                        <option value="1">Opcion a</option>
                        <option value="2">Opcion b</option>
                        <option value="3">Opcion c</option>
                        <option value="4">Opcion d</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
            </Link>  
        </div>
    )
}

export default Formularios
