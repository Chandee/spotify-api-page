import React from 'react';
import { render } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
// Replace this with the appropriate imports for your project
import rootReducer from '../redux/reducers';
import { theme } from './Theme';
import { ThemeProvider } from 'styled-components';
import thunk from 'redux-thunk';

export const renderConnected = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Provider>
    );
  };
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
