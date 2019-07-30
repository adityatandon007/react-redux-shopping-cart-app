import {ADD_TO_CART, REMOVE_FROM_CART} from './actionTypes';

export function addToCart(payload){
    return({
        type: ADD_TO_CART,
        payload: payload
    });
}

export function removeFromCart(payload){
    return({
        type: REMOVE_FROM_CART,
        payload: payload
    });
}

// export function updateQuantity(payload) {
//     return({
//         type: UPDATE_QUANTITY,
//         payload: payload
//     });
// }

// export function updateCart(payload) {
//     return({
//         type: UPDATE_CART,
//         payload: payload
//     });
// }

// export function syncQuantity(payload) {
//   return {
//     type: SYNC_QUANTITY,
//     payload: payload
//   }
// }
