import React from 'react';
import Cartao from '../Cartao';
import { screen, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/Theme';

describe('Testes do Cartao', () => {
  it('Verifica a renderizacao', () => {
    render(
      <ThemeProvider theme={theme}>
        <Cartao nomeAlbum={'Album do Joao'} nomeArtista={'Joao das coves'} />
      </ThemeProvider>
    );
    expect(screen.getByText(/album do joao/i)).toBeInTheDocument();
    expect(screen.getByText(/joao das coves/i)).toBeInTheDocument();
  });
});
