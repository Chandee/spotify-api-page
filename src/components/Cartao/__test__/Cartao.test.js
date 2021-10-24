import React from 'react';
import Cartao from '../Cartao';
import { screen, render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/Theme';

describe('Testes do Cartao', () => {
  it('Verifica a renderizacao', () => {
    render(
      <ThemeProvider theme={theme}>
        <Cartao
          nomeAlbum={'Album do Joao'}
          nomeArtista={'Joao das coves'}
          imagem='imagem.jpg'
        />
      </ThemeProvider>
    );
    expect(screen.getByText(/album do joao/i)).toBeInTheDocument();
    expect(screen.getByText(/joao das coves/i)).toBeInTheDocument();
  });

  it('Verifica a renderizacao sem hover e se clica na funcao', () => {
    const funcaoClique = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Cartao
          nomeAlbum={'Album do Joao'}
          nomeArtista={'Joao das coves'}
          imagem='imagem.jpg'
          clique={funcaoClique}
          noHover
        />
      </ThemeProvider>
    );
    expect(screen.getByText(/album do joao/i)).toBeInTheDocument();
    expect(screen.getByText(/joao das coves/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/joao das coves/i));
    expect(funcaoClique).toBeCalled();
  });
});
