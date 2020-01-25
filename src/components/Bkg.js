import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import {BKG_DARK, BKG_LIGHT} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  background: {
    width: wp('100%'),
    height: hp('110%'),
    position: 'absolute',
    left: 0,
    zIndex: -99999
  },
  gradient: {
    width: wp('100%'),
    height: hp('110%'),
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 1
  },
  image: {
    width: wp('100%'),
    height: hp('36%'),
    position: 'absolute',
    bottom: 0,
    opacity: 0.8
  }
});

export default () => {
  return (
    <View style={styles.background}>
      <LinearGradient style={styles.gradient} colors={[BKG_DARK, BKG_LIGHT]} />
    </View>
  );
};
