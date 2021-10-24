import { reducerDados, reducerMusica } from '../reducers';

describe('testando os reducers', () => {
  test('testando reducer dados FETCH_ALBUM_REQUEST', () => {
    expect(reducerDados({}, { type: 'FETCH_ALBUM_REQUEST' })).toStrictEqual({
      loading: true,
    });
  });

  test('testando reducer dados FETCH_ALBUM_SUCCESS', () => {
    expect(
      reducerDados(
        {},
        {
          type: 'FETCH_ALBUM_SUCCESS',
          payload: { dado: 'teste', ultimaPesquisa: 'teste' },
        }
      )
    ).toStrictEqual({
      loading: true,
      dados: 'teste',
      error: '',
      loading: false,
      ultimaPesquisa: 'teste',
    });
  });

  test('testando reducer dados FETCH_ALBUM_FAILURE', () => {
    expect(
      reducerDados({}, { type: 'FETCH_ALBUM_FAILURE', payload: 'erro' })
    ).toStrictEqual({
      dados: [],
      error: 'erro',
      loading: false,
    });
  });

  test('testando reducer dados dafault', () => {
    expect(reducerDados({}, { type: 'default' })).toStrictEqual({});
  });

  test('testando o reducerMusica FETCH_MUSICA_REQUEST', () => {
    expect(reducerMusica({}, { type: 'FETCH_MUSICA_REQUEST' })).toStrictEqual({
      loading: true,
    });
  });

  test('testando o reducerMusica FETCH_MUSICA_SUCCESS', () => {
    expect(
      reducerMusica(
        {},
        {
          type: 'FETCH_MUSICA_SUCCESS',
          payload: { musicas: 'teste', album: 'teste' },
        }
      )
    ).toStrictEqual({
      album: 'teste',
      error: '',
      loading: false,
      musicas: 'teste',
    });
  });

  test('testando o reducerMusica FETCH_MUSICA_FAILURE', () => {
    expect(
      reducerMusica({}, { type: 'FETCH_MUSICA_FAILURE', payload: 'erro' })
    ).toStrictEqual({
      album: {},
      error: 'erro',
      loading: false,
      musicas: [],
    });
  });

  test('testando o reducerMusica default', () => {
    expect(reducerMusica({}, { type: 'default' })).toStrictEqual({});
  });
});
