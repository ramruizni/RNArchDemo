import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashLogoScreen from './screens/SplashLogoScreen';
import LoginScreen from './screens/LoginScreen';

export default createAppContainer(
  createStackNavigator({
    SplashLogoScreen,
    LoginScreen
  })
);
