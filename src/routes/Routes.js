import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Album from '../pages/Album/Album';
import Callback from '../pages/Callback/Callback';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import { Container } from './Routes.styles';
const Routes = () => {
  return (
    <Router>
      <Container>
        <header>imagem aqui</header>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route path='/album/:id'>
            <Album />
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
        </Switch>
      </Container>
    </Router>
  );
};

export default Routes;
