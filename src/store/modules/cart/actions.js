import types from './types';

export function addToCart(product) {
  return {type: types.ADD_TO_CART, product};
}
