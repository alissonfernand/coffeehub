import React from 'react';
import {TouchableOpacity} from 'react-native';

import {AppBarContainer, IconBack, ProductName} from './styles';

const AppBar = ({producName}) => {
  return (
    <AppBarContainer>
      <TouchableOpacity onPress={() => console.log('dasd')}>
        <IconBack />
      </TouchableOpacity>
      <ProductName>{producName}</ProductName>
    </AppBarContainer>
  );
};

export default AppBar;
