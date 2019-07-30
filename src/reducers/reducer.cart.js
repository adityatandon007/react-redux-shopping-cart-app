import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/actionTypes'

export default function (state = [], action) {
    switch(action.type){
        case ADD_TO_CART:
            return state.concat(action.payload);
        case REMOVE_FROM_CART:
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}
