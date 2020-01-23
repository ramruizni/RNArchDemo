import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashLogoScreen from './screens/SplashLogoScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';

const StackNavigator = createStackNavigator({
  SplashLogoScreen,
  MenuScreen,
  LoginScreen
});
const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
