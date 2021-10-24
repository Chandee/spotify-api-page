import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../Login';

describe('Testes do login', () => {
  test('Verifica entrada do login', () => {
    const { container } = render(<Login />);
    expect(container.innerHTML).toBeTruthy();
  });
});
