import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login";
import List from './List';

//All the routes in the React app is defined here
//as this is a login app, the root route is the login page.s
function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login}></Route>
        <Route path='/list' exact component={List}></Route>
      </Switch>
    </Router>
  );
}

export default App;
