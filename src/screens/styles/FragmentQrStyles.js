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
  textQr: {
    flex: 1,
    width: wp('90%'),
    textAlign: 'justify',
    backgroundColor: BUTTONS,
    fontSize: 14,
    color: 'white',
    margin: 20,
    padding: 10,
    borderRadius: 15
  }
});
