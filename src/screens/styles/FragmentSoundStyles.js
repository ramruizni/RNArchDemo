import {StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BUTTONS} from './Commons';

export default StyleSheet.create({
  ...CommonStyles,
  textQrContainer: {
    flex: 1
  },
  btnQrContainer: {
    width: '100%',
    height: 80,
    alignItems: 'center'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
