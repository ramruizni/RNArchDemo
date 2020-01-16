import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {PRIMARY} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  background: {
    width: wp('100%'),
    height: hp('100%'),
    position: 'absolute',
    zIndex: -99999
  },
  gradient: {
    width: wp('100%'),
    height: hp('100%'),
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
      <LinearGradient style={styles.gradient} colors={["#252E48", "#3B4567"]} />
    </View>
  );
};
