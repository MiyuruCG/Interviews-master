import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import List from './List';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/list' exact component={List}></Route>
      </Switch>
    </Router>
  );
}

export default App;
