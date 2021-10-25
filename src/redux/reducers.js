import {
  FETCH_ALBUM_REQUEST,
  FETCH_ALBUM_SUCCESS,
  FETCH_ALBUM_FAILURE,
  FETCH_MUSICA_REQUEST,
  FETCH_MUSICA_SUCCESS,
  FETCH_MUSICA_FAILURE,
  CLEAR_MUSIC,
  SAVE_MUSIC,
  GUARDA_HISTORICO,
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

const initialStatePlay = {
  musicaNome: '',
  urlPreview: '',
};

const initialStateHistorico = {
  historico: [],
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

export const reducerPlay = (state = initialStatePlay, action) => {
  switch (action.type) {
    case CLEAR_MUSIC:
      return {
        musicaNome: '',
        urlPreview: '',
      };
    case SAVE_MUSIC: {
      return {
        musicaNome: action.payload.musicaNome,
        urlPreview: action.payload.urlPreview,
      };
    }
    default:
      return state;
  }
};

export const reducerHistorico = (state = initialStateHistorico, action) => {
  switch (action.type) {
    case GUARDA_HISTORICO:
      const concatArray = [...state.historico, action.payload];
      const vetorLimpo = concatArray.reduce((acc, va) => {
        if (acc.some(a => a.id === va.id)) {
          return acc;
        } else {
          acc.push(va);
          return acc;
        }
      }, []);
      return {
        historico: vetorLimpo,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  dadosGerais: reducerDados,
  dadosMusica: reducerMusica,
  musicaAtual: reducerPlay,
  historicoPesquisa: reducerHistorico,
});

export default rootReducer;
