import { SEARCH_LOAD, SEARCH_MOVIE  } from '../actions/types';

const initalState = {
    isLoaded: false,
    search: null
}

export default function(state = initalState, action){
    switch(action.type){

        case SEARCH_LOAD:
        return {
            ...state,
            isLoaded: true
        }

        case SEARCH_MOVIE:
        return {
            ...state,
            search: action.payload,
            isLoaded: false
        }

        default:
        return state;
    }
}