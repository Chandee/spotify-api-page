import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Routes from '../Routes';

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
    const { container } = render(<Routes />);
    expect(screen.getByText('inicio')).toBeInTheDocument();
    expect(container.innerHTML).toBeTruthy();
  });
});
