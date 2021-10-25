import React from 'react';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderConnected } from '../../../utils/test-utils';
import InputPesquisa from '../InputPesquisa';
import { fetchAlbum } from '../../../redux/actions';
import { requestAxios } from '../../../service/request';

jest.mock('../../../service/request', () => {
  return {
    requestAxios: jest.fn(() => Promise.resolve(true)),
  };
});

describe('Teste do input de pesquisa', () => {
  test('Verifica se chama endpoint após escrever na busca', async () => {
    const initialState = {
      dadosGerais: { loading: false, dados: [], ultimaPesquisa: '', error: '' },
    };
    renderConnected(<InputPesquisa />, { initialState });
    expect(
      screen.getByText(/Busque por artistas, álbuns ou músicas/i)
    ).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/Busque por/i), {
      target: { value: 'a' },
    });
    await waitFor(() => expect(requestAxios).toBeCalled());
  });
});
