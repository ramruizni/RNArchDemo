import {StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';

export default StyleSheet.create({
  ...CommonStyles,
  navPager: {
    position: 'absolute',
    bottom: 0,
    zIndex: 5
  }
});
