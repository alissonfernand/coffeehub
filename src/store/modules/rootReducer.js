import {combineReducers} from 'redux';

import cart from '../modules/cart/reducer';

// combine reducers
export default combineReducers({
  cart,
});
