import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomNavigator from '../navigation/BottomNavigator';

import Cart from '../tabs/Cart';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="BottomNavigator" component={BottomNavigator} />
      <Drawer.Screen name="Cart" component={Cart} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
