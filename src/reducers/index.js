import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr';
import Products from './reducer.products';
import Cart from './reducer.cart';

const rootReducer = combineReducers({
    Products: Products,
    cartProducts: Cart,
    toastr: toastrReducer
});

export default rootReducer;