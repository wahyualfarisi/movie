import { GET_OVERVIEW_MOVIE, OVERVIEW_LOADING  } from '../actions/types';

const initialState = {
    isLoaded: false,
    movie: null
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



        default:
        return state;
    }



}