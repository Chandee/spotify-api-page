import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
