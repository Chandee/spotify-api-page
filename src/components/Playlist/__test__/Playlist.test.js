import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import { Playlist } from '../Playlist';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../utils/Theme';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

jest.mock('../../../redux/actions');

const actions = require('../../../redux/actions');
actions.salvaMusica = jest.fn().mockReturnValue('123');

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
            preview: 'url',
          },
          {
            id: '4mTfLX2itUOUlydzoIumb1',
            nomeMusica: 'Uma Prova De Amor - Ao Vivo',
            duracao: '3:09',
            preview: 'url',
          },
        ],
        album: {},
        ultimaMusicaTocada: {},
      },
    };

    const store = mockStore(initialState);
    const test = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Playlist
          salvaMusica={test}
          musicas={initialState.dadosMusica.musicas}
        />
      </ThemeProvider>
    );
    expect(
      screen.getByText(/Deixa A Vida Me Levar - Ao Vivo/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Uma Prova De Amor - Ao Vivo/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/3:15/i)).toBeInTheDocument();
    expect(screen.getByText(/3:09/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Uma Prova De Amor - Ao Vivo/i));
    expect(test).toBeCalled();
  });
});
