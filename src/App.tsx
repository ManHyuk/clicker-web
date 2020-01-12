import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import MainContainer from "./containers/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
