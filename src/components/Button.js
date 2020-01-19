import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BUTTONS} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  main: {
    width: wp('56%'),
    height: wp('11%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: BUTTONS
  },
  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold"
  }
});

export default ({style, title, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.main, ...style}} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
