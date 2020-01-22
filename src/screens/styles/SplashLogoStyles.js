import {StyleSheet} from 'react-native';
import CommonStyles from './CommonStyles';
import {PRIMARY} from './Commons';

export default StyleSheet.create({
  ...CommonStyles,
  logo: {
    marginBottom: 10,
    width: 160,
    height: 160,
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
