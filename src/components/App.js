import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tasks from "./Tasks";

const App = () => (
  <div className="container">
    <h1 className="container__title">It's a simple TODOList</h1>
    <hr className="container__line" />
    <Router>
      <Switch>
        <Route exact path="/add" component={() => <div></div>} />
        <Route exact path="/edit/:id" component={() => <div></div>} />
        <Route exact path="/:filter?" component={Tasks} /> 
      </Switch>
    </Router>
  </div>    
);

export default App;
