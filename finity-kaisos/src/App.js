import React from 'react';
import Login from './screens/Login';
import Registeration from './screens/Registration';
import HomePage from './screens/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Registeration} />
      </Switch>
    </Router>
  );
}
