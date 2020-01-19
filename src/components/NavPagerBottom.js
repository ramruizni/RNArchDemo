import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BUTTONS} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    height: 60,
    backgroundColor: BUTTONS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '50%',
    height: 60,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default props => {
  return (
    <View style={{...styles.main, ...props.style}}>
      <TouchableOpacity style={{...styles.button, borderRightWidth: 0.2}} onPress={props.menuQrPress}>
        <Text style={styles.buttonText}>Read QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={props.menuSoundPress}>
        <Text style={styles.buttonText}>Play Sound</Text>
      </TouchableOpacity>
    </View>
  );
};
