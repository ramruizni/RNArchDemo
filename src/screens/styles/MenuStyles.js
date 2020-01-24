import {StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';

export default StyleSheet.create({
  ...CommonStyles,
  navPager: {
    position: 'absolute',
    bottom: 0,
    zIndex: 5
  },
  main: {
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  }
});
