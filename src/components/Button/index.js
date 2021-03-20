import React from 'react';

import {ButtonCart} from './styles';

const Button = ({children, onPress}) => {
  return <ButtonCart onPress={onPress}>{children}</ButtonCart>;
};

export default Button;
