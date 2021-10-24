import { waitFor } from '@testing-library/dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestAxios } from '../../service/request';
import { fetchAlbum, fetchMusicas } from '../actions';
import { mock, mock2 } from './mockresponse';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../../service/request', () => {
  return {
    requestAxios: jest
      .fn()
      .mockImplementationOnce(() => Promise.reject({ message: 'erro' }))
      .mockImplementationOnce(() => Promise.resolve(mock))
      .mockImplementationOnce(() => Promise.resolve(mock2))
      .mockImplementation(() => Promise.reject({ message: 'erro' })),
  };
});

describe('testes das actions redux', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      loading: false,
      dados: [],
      ultimaPesquisa: '',
      error: '',
    });
  });

  test('Verifica se fetchalbum valida quando passado dado e retorna erro', async () => {
    expect(store.dispatch(fetchAlbum('teste')));
    expect(requestAxios).toBeCalled();
    await waitFor(() =>
      expect(store.getActions()).toStrictEqual([
        {
          type: 'FETCH_ALBUM_REQUEST',
        },
        {
          payload: 'erro',
          type: 'FETCH_ALBUM_FAILURE',
        },
      ])
    );
  });

  test('Verifica se valida fetchalbum quando passado dado e retorna correto da api', async () => {
    expect(store.dispatch(fetchAlbum('teste')));
    expect(requestAxios).toBeCalled();
    await waitFor(() =>
      expect(store.getActions()).toStrictEqual([
        {
          type: 'FETCH_ALBUM_REQUEST',
        },
        {
          payload: 'erro',
          type: 'FETCH_ALBUM_FAILURE',
          payload: {
            dado: [
              {
                artistas: ['Vários intérpretes'],
                id: '6saQKGLQ7cDoPbD4a6uPGA',
                imagem: {
                  height: 300,
                  url: 'https://i.scdn.co/image/ab67616d00001e0236ef8e4d7687ee5c19c3e7cc',
                  width: 300,
                },
                nomeAlbum:
                  'Zeca Apresenta: O Quintal Do Zeca Pagodinho (Ao Vivo)',
              },
            ],
            ultimaPesquisa: 'teste',
          },
          type: 'FETCH_ALBUM_SUCCESS',
        },
      ])
    );
  });

  test('Verifica se fetchalbum nao faz primeira chamada quando nao passa dado', () => {
    expect(store.dispatch(fetchAlbum('')));
    expect(store.getActions()).toStrictEqual([
      { type: 'FETCH_ALBUM_REQUEST' },
      {
        payload: { dado: [], ultimaPesquisa: '' },
        type: 'FETCH_ALBUM_SUCCESS',
      },
    ]);
  });

  test('Verifica a chamada da api fetchmusicas', async () => {
    expect(store.dispatch(fetchMusicas('123')));
    await waitFor(() =>
      expect(store.getActions()).toStrictEqual([
        { type: 'FETCH_MUSICA_REQUEST' },
        {
          payload: {
            album: {
              artistas: 'Zeca Pagodinho',
              imagem: {
                height: 300,
                url: 'https://i.scdn.co/image/ab67616d00001e029f171d77622d03aa2d31832c',
                width: 300,
              },
              nomeAlbum: 'Zeca Pagodinho - Uma Prova De Amor Ao Vivo (Deluxe)',
            },
            musicas: [
              {
                duracao: '3:15',
                id: '3ADuEIn09NAZIBgpYY3IsE',
                nomeMusica: 'Deixa A Vida Me Levar - Ao Vivo',
              },
            ],
          },
          type: 'FETCH_MUSICA_SUCCESS',
        },
      ])
    );
  });

  test('Verifica a chamada da api fetchmusicas gera erro', async () => {
    expect(store.dispatch(fetchMusicas('1234')));
    await waitFor(() =>
      expect(store.getActions()).toStrictEqual([
        { type: 'FETCH_MUSICA_REQUEST' },
        { payload: 'erro', type: 'FETCH_MUSICA_FAILURE' },
      ])
    );
  });
});
