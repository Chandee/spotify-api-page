import React from 'react';
import { screen, fireEvent, waitFor, render } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import { limpaMusica, salvaMusica } from '../../../redux/actions';
import { TocadorDeMusica } from '../TocadorDeMusica';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/Theme';

describe('Testes do tocador de musica', () => {
  test('Verifica se possui a musica ', async () => {
    const initialState = {
      musicaAtual: {
        musicaNome: 'musica teste',
        urlPreview: 'url',
      },
    };
    const funcPlay = jest.fn();
    const funcPause = jest.fn();
    const funcLimpaMusica = jest.fn();

    window.HTMLMediaElement.duration = 30;

    window.HTMLMediaElement.prototype.play = () => {
      funcPlay();
    };
    window.HTMLMediaElement.prototype.pause = () => {
      funcPause();
    };

    render(
      <ThemeProvider theme={theme}>
        <TocadorDeMusica
          limpaMusica={funcLimpaMusica}
          musica={initialState.musicaAtual.musicaNome}
          urlPreview={initialState.musicaAtual.urlPreview}
        />
      </ThemeProvider>
    );
    expect(funcLimpaMusica).toBeCalled();
    await waitFor(() => {
      expect(screen.getByText(/musica teste/i)).toBeInTheDocument();
    });
    fireEvent.click(screen.getByAltText('Botao play'));
    expect(funcPlay).toBeCalled();
    fireEvent.click(screen.getByAltText('Botao pausa'));
    expect(funcPause).toBeCalled();
  });
});
