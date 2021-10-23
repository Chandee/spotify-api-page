import React, { useEffect, useState } from 'react';
import { useLogin } from '../utils/hooks/useLogin';

const Login = () => {
  const url = useLogin();

  return <a href={url}>inicio</a>;
};

export default Login;
