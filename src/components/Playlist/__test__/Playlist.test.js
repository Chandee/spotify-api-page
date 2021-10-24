import React from 'react';
import { screen } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import Playlist from '../Playlist';

describe('Testes da playlist', () => {
  test('Verifica se renderiza todas musicas', () => {
    const initialState = {
      dadosMusica: {
        loading: false,
        musicas: [
          {
            id: '3ADuEIn09NAZIBgpYY3IsE',
            nomeMusica: 'Deixa A Vida Me Levar - Ao Vivo',
            duracao: '3:15',
          },
          {
            id: '4mTfLX2itUOUlydzoIumb1',
            nomeMusica: 'Uma Prova De Amor - Ao Vivo',
            duracao: '3:09',
          },
        ],
        album: {},
        ultimaMusicaTocada: {},
      },
    };

    renderConnected(<Playlist />, {
      initialState,
    });
    expect(
      screen.getByText(/Deixa A Vida Me Levar - Ao Vivo/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Uma Prova De Amor - Ao Vivo/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/3:15/i)).toBeInTheDocument();
    expect(screen.getByText(/3:09/i)).toBeInTheDocument();
  });
});
