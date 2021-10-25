import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import TocadorDeMusica from '../components/TocadorDeMusica/TocadorDeMusica';
import Album from '../pages/Album/Album';
import Callback from '../pages/Callback/Callback';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import useAuthentication from '../utils/hooks/useAuthentication';
import * as S from './Routes.styles';
const Routes = () => {
  const logado = useAuthentication();
  return (
    <Router>
      <div
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <S.Container>
          <S.Header>
            <img src={'../img/logo.png'} />
          </S.Header>
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
              {logado ? <Redirect to='/home' /> : <Login />}
            </Route>
            <Route path='/callback'>
              <Callback />
            </Route>
          </Switch>
        </S.Container>
        {logado && <TocadorDeMusica />}
      </div>
    </Router>
  );
};

export default Routes;
