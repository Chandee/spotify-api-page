import axios from 'axios';
import React, { useEffect } from 'react';
import { requestAxios } from '../../service/request';
import { useHistory } from 'react-router-dom';

const Callback = () => {
  const history = useHistory();
  const getHashParams = () => {
    var hashParams = {};
    var e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    sessionStorage.setItem('auth_token', hashParams.access_token);
    history.push('/home');
  };

  useEffect(() => {
    getHashParams();
  }, []);

  return <div>Autorizando</div>;
};

export default Callback;
