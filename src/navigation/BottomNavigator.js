import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {responsiveHeight} from 'react-native-responsive-dimensions';

import Home from '../tabs/Home';
import Map from '../tabs/Map';
import Cart from '../tabs/Cart';
import Profile from '../tabs/Profile';

import {COLORS} from '../consts/utils';

import HomeIcon from '../components/HomeIcon';
import ProfileIcon from '../components/ProfileIcon';
import LocationIcon from '../components/LocationIcon';
import CoffeeIcon from '../components/CoffeeIcon';

const Tab = createBottomTabNavigator();

const heightTabBar = responsiveHeight(10.05);

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#ffffff',
          height: heightTabBar,
          borderTopLeftRadius: 46,
          borderTopRightRadius: 46,
          shadowOffset: {height: 0, width: 2},
          shadowColor: '#FDE9DA',
          shadowRadius: 88,
          shadowOpacity: 1,
        },
        activeTintColor: COLORS.tabBarActiveTintColor,
        inactiveTintColor: COLORS.tabBarInactiveTintColor,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({color}) => <LocationIcon color={color} />,
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color}) => <CoffeeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
