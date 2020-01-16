import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  background: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    zIndex: -99999
  },
  main: {
    flex: 1,
    height: hp('80%'),
    alignItems: 'center',
    zIndex: 1,
    justifyContent: 'center'
  },
  mainCentering: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
