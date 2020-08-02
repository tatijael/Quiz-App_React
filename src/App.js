import React from 'react';
import "./Components/Style/main.scss";
import CardContainer from "./Components/CardContainer"

function App() {
  return (
  <div className="wrapper">
    <h1>Preguntados</h1>
    <p>Selecciona la Categoria deseada</p>
    <CardContainer />
  </div>
  )
}

export default App;
