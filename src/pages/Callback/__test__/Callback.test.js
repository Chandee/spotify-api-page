import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import { requestAxios } from '../../../service/request';
import Callback from '../Callback';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const localStorageMock = (() => {
  let store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'sessionStorage', {
  value: localStorageMock,
});

Object.defineProperty(window, 'location', {
  value: {
    hash: '#access_token=123&token_type=Bearer&expires_in=3600&state=b378885e244a9',
    href: 'http://localhost:3000/callback#access_token=123&token_type=Bearer&expires_in=3600&state=b378885e244a9',
  },
});
//localhost:3000/callback#access_token=123&token_type=Bearer&expires_in=3600&state=b378885e244a9
describe('Testes do Callback', () => {
  test('Renderizacao da pagina e se esta salvando o token', async () => {
    const initialState = {};
    renderConnected(<Callback />, {
      initialState,
    });

    expect(mockHistoryPush).toBeCalled();
    expect(window.sessionStorage.getItem('auth_token')).toBe('123');
    expect(screen.getByText(/autorizando/i)).toBeInTheDocument();
  });
});
