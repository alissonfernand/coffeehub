import React from 'react';
import {View} from 'react-native';

import {
  AppBarContainer,
  HandleNavigation,
  IconBack,
  ProductName,
} from './styles';

const AppBar = ({text}) => {
  return (
    <AppBarContainer>
      <HandleNavigation onPress={() => console.log('dasd')}>
        <IconBack style={{zIndex: 15}} />
      </HandleNavigation>
      <ProductName>{text}</ProductName>
      {/* <View /> */}
    </AppBarContainer>
  );
};

export default AppBar;
