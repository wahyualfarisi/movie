import {
  GET_OVERVIEW_MOVIE,
  OVERVIEW_LOADING,
  GET_SIMILIAR_MOVIE,
  VIDEO_LOADING,
  GET_VIDEOS,
  IS_LOAD,
  GET_RECOMENDATIONS
} from "../actions/types";

const initialState = {
  isLoaded: false,
  movie: null,
  similiars: null,
  recomendations: [],
  recomendationsload: false,
  isVideo: false,
  video: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    //set to get overview loading
    case OVERVIEW_LOADING:
      return {
        ...state,
        isLoaded: true
      };

    case GET_OVERVIEW_MOVIE:
      return {
        ...state,
        movie: action.payload,
        isLoaded: false
      };

    case GET_SIMILIAR_MOVIE:
      return {
        ...state,
        similiars: action.payload
      };

    case VIDEO_LOADING:
      return {
        ...state,
        isVideo: true
      };

    case GET_VIDEOS:
      return {
        ...state,
        video: action.payload,
        isVideo: false
      };

    case IS_LOAD:
      return {
        ...state,
        recomendationsload: true,
      };

    case GET_RECOMENDATIONS:
      return {
        ...state,
        recomendations: action.payload,
        recomendationsload: false
      };

    default:
      return state;
  }
}
