import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {statusBarHeight} from '../utils/UI';

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(200,200,200,0.4)',
    position: 'absolute',
    top: statusBarHeight(),
    zIndex: 99999999999
  }
});

export default () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
  );
};
