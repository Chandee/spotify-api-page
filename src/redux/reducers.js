import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
  FETCH_MUSICA_REQUEST,
  FETCH_MUSICA_SUCCESS,
  FETCH_MUSICA_FAILURE,
} from './constants';
import { combineReducers } from 'redux';

const initialStateDados = {
  loading: false,
  dados: [],
  ultimaPesquisa: '',
  error: '',
};

const initialStateMusica = {
  loading: false,
  musicas: [],
  album: {},
  ultimaMusicaTocada: {},
};

export const reducerDados = (state = initialStateDados, action) => {
  switch (action.type) {
    case FETCH_ALBUM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALBUM_SUCCESS:
      return {
        loading: false,
        dados: action.payload.dado,
        ultimaPesquisa: action.payload.ultimaPesquisa,
        error: '',
      };
    case FETCH_ALBUM_FAILURE:
      return {
        loading: false,
        dados: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const reducerMusica = (state = initialStateMusica, action) => {
  switch (action.type) {
    case FETCH_MUSICA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MUSICA_SUCCESS:
      return {
        loading: false,
        musicas: action.payload.musicas,
        album: action.payload.album,
        error: '',
      };
    case FETCH_MUSICA_FAILURE:
      return {
        loading: false,
        musicas: [],
        album: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dadosGerais: reducerDados,
  dadosMusica: reducerMusica,
});

export default rootReducer;
