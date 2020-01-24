import {StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';
import {PRIMARY} from './Commons';

export default StyleSheet.create({
  ...CommonStyles,
  logo: {
    marginBottom: 60,
    width: 100,
    height: 100,
    tintColor: PRIMARY
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: PRIMARY
  },
  versionText: {
    textAlign: 'center',
    fontSize: 18,
    color: PRIMARY,
    marginBottom: 40
  }
});
