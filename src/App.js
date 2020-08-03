import React from 'react';
import "./Components/Style/main.scss";
import CardContainer from "./Components/CardContainer"
import Questions from "./Components/Questions"
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
  <Router>
  <div className="wrapper">
    <h1>Preguntados</h1>
    <p>Selecciona la Categoria deseada</p>
    <Route exact path="/"><CardContainer /></Route>
    <Route exact path="/questions/:id"><Questions /></Route>
  </div>
  </Router>
  )
}

export default App;
