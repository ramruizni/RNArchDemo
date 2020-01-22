import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {statusBarHeight} from '../utils/UI';
import MainStore from '../stores/MainStore';

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    position: 'absolute',
    top: statusBarHeight(),
    zIndex: 99999999999
  }
});

export default ({content}) => {
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        MainStore.showPopup = false;
      }}>
      {content}
    </TouchableOpacity>
  );
};
