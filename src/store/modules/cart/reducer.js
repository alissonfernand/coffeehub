import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  product: {
    name: null,
    price: null,
    size: null,
    sugar: null,
    amount: null,
  },
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.products = [...state.products, ...action.product];
      });
    default:
      return state;
  }
}

export default cart;
