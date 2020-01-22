import {StatusBar, StyleSheet} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {statusBarHeight} from '../../utils/UI';

export default StyleSheet.create({
  background: {
    flex: 1,
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
    marginTop: hp('16%'),
    marginBottom: 60,
    alignItems: 'center'
  }
});
