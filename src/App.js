import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from './navigation/DrawerNavigator';

import ProductDetails from './page/ProductDetails';

import {Provider} from 'react-redux';
import store from './store';

import SplashScreen from 'react-native-splash-screen';

import {COLORS} from './consts/utils';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.background}
        />

        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="DrawerNavigator">
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
