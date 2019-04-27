import {GET_POPULAR, POPULAR_LOADING} from './../actions/types';

const initialState = {
    isLoaded: false,
    popular: null
}

export default function(state = initialState, action) {
    switch(action.type){

        case POPULAR_LOADING:
        return {
            ...state,
            isLoaded: true
        }

        case GET_POPULAR: 
        return {
            ...state,
            popular: action.payload,
            isLoaded: false
        }



        default:
        return state;
    }
}