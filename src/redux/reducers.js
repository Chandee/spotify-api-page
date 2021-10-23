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
  error: '',
};

const initialStateMusica = {
  loading: false,
  album: {},
  musicas: [],
  ultimaMusicaTocada: {},
};

const reducerDados = (state = initialStateDados, action) => {
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

const reducerMusica = (state = initialStateMusica, action) => {
  switch (action.type) {
    case FETCH_MUSICA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MUSICA_SUCCESS:
      return {
        loading: false,
        musicas: action.musicas,
        album: action.album,
        error: '',
      };
    case FETCH_MUSICA_FAILURE:
      return {
        loading: false,
        dados: [],
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
