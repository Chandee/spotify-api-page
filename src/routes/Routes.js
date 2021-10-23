import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Callback from '../pages/Callback/Callback';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import { Container } from './Routes.styles';
const Routes = () => {
  useEffect(() => {
    console.log('teste aqui');
  }, []);

  return (
    <Router>
      <Container>
        <header>imagem aqui</header>
        <Switch>
          <Route path='/about'>
            <div>baout</div>
          </Route>
          <Route path='/home'>
            <Home />
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
      </Container>
    </Router>
  );
};

export default Routes;
