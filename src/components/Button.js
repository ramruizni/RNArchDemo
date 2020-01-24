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
    fontWeight: 'bold'
  }
});

export default ({style, title, enabled, onPress}) => {
  const backgroundColor = enabled ? BUTTONS : 'gray';
  const handlePress = () => {
    if (enabled) {
      onPress();
    }
  };

  return (
    <TouchableOpacity style={{...styles.main, backgroundColor, ...style}} onPress={handlePress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
