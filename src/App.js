import React from 'react';
import "./Components/Style/main.scss";
import CardContainer from "./Components/CardContainer"
import Questions from "./Components/Questions"
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
  <Router>
  <div className="wrapper">
    <Route exact path="/"><CardContainer /></Route>
    <Route exact path="/questions/:id"><Questions /></Route>
  </div>
  </Router>
  )
}

export default App;
