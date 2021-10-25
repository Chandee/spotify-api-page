import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/Theme';

describe('Testes do login', () => {
  test('Verifica entrada do login', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
    expect(container.innerHTML).toBeTruthy();
  });
});
