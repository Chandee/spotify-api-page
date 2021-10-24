import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../Routes';

describe('Teste das rotas', () => {
  test('Verifica se renderiza', () => {
    const { container } = render(<Routes />);
    expect(container.innerHTML).toBeTruthy();
  });
});
