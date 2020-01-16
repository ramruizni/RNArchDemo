import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  main: {
    width: wp('56%'),
    height: wp('11%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: 'indigo'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
});

export default ({style, title, onPress}) => {
  return (
    <TouchableOpacity style={{...styles.main, ...style}} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
