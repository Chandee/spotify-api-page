import React from 'react';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import Album from '../Album';
import { requestAxios } from '../../../service/request';

const mockRequest = jest.fn();
jest.mock('../../../service/request', () => {
  return {
    requestAxios: jest.fn(() => Promise.resolve(true)),
  };
});

const mockHistoryPush = jest.fn(() => '123');
const mockGoBack = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: mockHistoryPush,
  }),
  useHistory: () => ({
    goBack: mockGoBack,
  }),
}));

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
    album: {
      nomeAlbum: 'zeca teste',
      artistas: 'zeca pagodinho',
      imagem: { url: 'imagem.jpg' },
    },
    ultimaMusicaTocada: {},
  },
};

describe('Testes do Album', () => {
  test('Renderizacao da pagina', async () => {
    renderConnected(<Album />, {
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
    await waitFor(() => expect(requestAxios).toBeCalled());
  });

  test('Verifica o clique no botao de voltar', async () => {
    renderConnected(<Album />, {
      initialState,
    });
    fireEvent.click(screen.getByText(/voltar/i));
    expect(mockGoBack).toBeCalled();
  });
});
