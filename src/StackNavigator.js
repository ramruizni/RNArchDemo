import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashLogoScreen from './screens/SplashLogoScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';

export default createAppContainer(
  createStackNavigator({
    MenuScreen,
    LoginScreen,
    SplashLogoScreen
  })
);
