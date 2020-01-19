import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BUTTONS} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    height: hp('16%'),
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    backgroundColor: BUTTONS,
    borderBottomWidth: 0.2,
    borderColor: 'white'
  },
  title: {
    color: 'white',
    fontSize: 20,
    position: 'absolute',
    fontWeight: 'bold',
    bottom: 20
  }
});

export default ({title}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
