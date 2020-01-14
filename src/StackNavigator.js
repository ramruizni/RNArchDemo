import {createAppContainer, createStackNavigator} from 'react-navigation';
import SplashLogoScreen from './screens/SplashLogoScreen';

export default createAppContainer(
  createStackNavigator({
    SplashLogoScreen
  })
);
