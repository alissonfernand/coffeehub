import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import BottomNavigator from '../navigation/BottomNavigator';

import Home from '../tabs/Home';
import Map from '../tabs/Map';
import Cart from '../tabs/Cart';
import Profile from '../tabs/Profile';

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
