import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste app', () => {
  test('Verifica se está renderizando', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toBeTruthy();
  });
});
