import { GET_OVERVIEW_MOVIE, OVERVIEW_LOADING, GET_SIMILIAR_MOVIE, VIDEO_LOADING, GET_VIDEOS  } from '../actions/types';

const initialState = {
    isLoaded: false,
    movie: null,
    similiars: null,
    isVideo: false,
    video: null
}

export default function (state= initialState, action) {

    switch(action.type){

        case OVERVIEW_LOADING: 
        return {
            ...state,
            isLoaded: true
        }

        case GET_OVERVIEW_MOVIE: 
        return  {
            ...state,
            movie: action.payload,
            isLoaded: false
        }

        case GET_SIMILIAR_MOVIE:
        return {
            ...state,
            similiars: action.payload
        }

        case VIDEO_LOADING:
        return {
            ...state,
            isVideo: true
        }

        case GET_VIDEOS:
        return {
            ...state,
            video: action.payload,
            isVideo: false
        }



        default:
        return state;
    }



}