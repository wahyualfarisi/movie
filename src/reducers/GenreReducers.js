import { GET_GENRE, GENRE_LOAD, GET_LIST_GENRE_LOAD, GET_LIST_GENRE } from '../actions/types';

const initialState = {
    isLoaded: false,
    genre: null,
    listLoaded: false,
    listmovie: null
}

export default function(state = initialState, action){
    switch(action.type){

        case GENRE_LOAD:
        return {
            ...state,
            isLoaded: true
        }

        case GET_LIST_GENRE_LOAD:
        return {
            ...state,
            lisLoaded: true
        }

        case GET_GENRE:
        return {
            ...state,
            genre: action.payload,
            isLoaded: false
        }

        case GET_LIST_GENRE:
        return {
            ...state,
            listmovie: action.payload,
            lisLoaded: false
        }

        default:
        return state;
    }
}