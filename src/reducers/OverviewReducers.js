import { GET_OVERVIEW_MOVIE, OVERVIEW_LOADING, GET_SIMILIAR_MOVIE  } from '../actions/types';

const initialState = {
    isLoaded: false,
    movie: null,
    similiars: null
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



        default:
        return state;
    }



}