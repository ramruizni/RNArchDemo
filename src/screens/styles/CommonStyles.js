import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export default StyleSheet.create({
  background: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    zIndex: -99999
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainCentering: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fragment: {
    height: hp('84%') - 80,
    width: wp('100%'),
    position: 'absolute',
    top: hp('16%') - getStatusBarHeight(),
    alignItems: 'center'
  }
});
