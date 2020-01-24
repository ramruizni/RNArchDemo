import {StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  ...CommonStyles,
  main: {
    width: wp('100%'),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
