import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
    opacity: 0.2
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
      <Image style={styles.gradient} source={require('../assets/bkg.png')} />
    </View>
  );
};
