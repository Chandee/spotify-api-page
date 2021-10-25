import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Routes from '../Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../utils/Theme';

describe('Teste das rotas', () => {
  test('Verifica se renderiza', () => {
    const localStorageMock = (() => {
      let store = {};

      return {
        getItem(key) {
          return store[key] || null;
        },
      };
    })();

    Object.defineProperty(window, 'sessionStorage', {
      value: localStorageMock,
    });
    global.window = { location: { pathname: '/login' } };
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    );
    expect(screen.getByText('Seja bem vindops')).toBeInTheDocument();
    expect(container.innerHTML).toBeTruthy();
  });
});
