import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import Home from '../Home';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Testes da Home', () => {
  test('Verifica quando tem dados na busca', async () => {
    const initialState = {
      dadosGerais: {
        loading: false,
        dados: [
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
          {
            nomeAlbum: 'Zeca Apresenta: O Quintal Do Pagodinho',
            artistas: ['Vários intérpretes'],
            id: '765de1s1K0uuzXAka1fp40',
            imagem: {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e02450bd4a3bacffdf3232f1cdc',
              width: 300,
            },
          },
        ],
        ultimaPesquisa: 'zeca',
        error: '',
      },
    };

    renderConnected(<Home />, {
      initialState,
    });
    expect(
      screen.getByText(/Resultados encontrados para "zeca"/i)
    ).toBeInTheDocument();
    expect(screen.queryAllByText(/Zeca Pagodinho/i)[0]).toBeInTheDocument();
    fireEvent.click(screen.queryAllByText(/Zeca Pagodinho/i)[0]);
    await waitFor(() => {
      expect(mockHistoryPush).toBeCalled();
    });
  });

  test('Verifica se mostra mensagem de quando não tem dado', async () => {
    const initialState = {
      dadosGerais: {
        loading: false,
        dados: [],
        ultimaPesquisa: 'zeca',
        error: '',
      },
    };

    renderConnected(<Home />, {
      initialState,
    });
    expect(screen.getByText(/Nenhum dado encontrado/i)).toBeInTheDocument();
  });
});
