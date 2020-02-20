import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashLogoScreen from './screens/SplashLogoScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import {RightTransition} from './utils/NavigatorTransitions';

const StackNavigator = createStackNavigator(
  {
    SplashLogoScreen,
    MenuScreen,
    LoginScreen
  },
  {
    headerMode: 'none',
    transitionConfig: NavigationOptions
  }
);

const NavigationOptions = () => {
  return {
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const {index} = scene;
      return RightTransition(position, index, layout.initWidth);
    }
  };
};

export default createAppContainer(StackNavigator);
