import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Callback from '../pages/Callback';
import Login from '../pages/Login';

const Routes = () => {
  useEffect(() => {
    console.log('teste aqui');
  }, []);

  return (
    <Router>
      <Switch>
        <Route path='/about'>
          <div>baout</div>
        </Route>
        <Route path='/users'>
          <div>users</div>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/callback'>
          <Callback />
        </Route>
        <Route path='/'>
          <Redirect to='/login' />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;