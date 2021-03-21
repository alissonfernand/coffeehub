import types from './types';
import produce from 'immer';

const INITIAL_STATE = {
  products: [],
};

function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.products.push({
          id: action.product.id,
          name: action.product.name,
          price: action.product.price,
          size: action.product.size,
          sugar: action.product.sugar,
          amount: action.product.amount,
          image: action.product.image,
        });
      });
    default:
      return state;
  }
}

export default cart;
