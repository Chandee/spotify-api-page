import React, { useEffect } from 'react';
import Routes from './routes/Routes';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
