import { GET_NOWPLAYING, NOWPLAYING_LOAD  } from '../actions/types';

const initialState = {
    isLoaded: false,
    nowPlaying: null
}

export default function(state = initialState, action){

    switch(action.type){
        case NOWPLAYING_LOAD:
        return {
            ...state,
            isLoaded: true
        }

        case GET_NOWPLAYING:
        return {
            ...state,
            nowPlaying: action.payload,
            isLoaded: false
        }



        default:
        return state;
    }

}