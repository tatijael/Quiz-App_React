import React from 'react';
import "./Components/Style/main.scss";
import Card from "./Components/card"

function App() {
  return (
  <div className="wrapper">
    <h1>Preguntados</h1>
    <p>Selecciona la Categoria deseada</p>
    <Card />
  </div>
  )
}

export default App;
