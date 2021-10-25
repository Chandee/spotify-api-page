import React from 'react';
import { screen, fireEvent, waitFor, render } from '@testing-library/react';
import Historico from '../Historico';
import { renderConnected } from '../../../utils/test-utils';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Teste do historico', () => {
  test('Verifica se chama endpoint após escrever na busca', async () => {
    const initialState = {
      historicoPesquisa: {
        historico: [
          {
            nomeAlbum: 'Zeca Pagodinho - Uma Prova De Amor Ao Vivo (Deluxe)',
            artistas: ['Zeca Pagodinho'],
            id: '4rDMla3wFYoWfhcoUQ5XuC',
            imagem: {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e029f171d77622d03aa2d31832c',
              width: 300,
            },
          },
        ],
      },
    };
    renderConnected(<Historico dadosHistorico={initialState.historico} />, {
      initialState,
    });
    expect(screen.getByText(/Historico de pesquisa/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/Zeca Pagodinho/i)[0]).toBeInTheDocument();
    fireEvent.click(screen.queryAllByText(/Zeca Pagodinho/i)[0]);

    await waitFor(() => {
      expect(mockHistoryPush).toBeCalled();
    });
  });
});
