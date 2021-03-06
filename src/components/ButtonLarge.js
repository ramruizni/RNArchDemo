import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BORDER_COLOR, BORDER_WIDTH, BUTTONS, PRIMARY} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  btnQr: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: BUTTONS,
    borderWidth: BORDER_WIDTH,
    borderColor: BORDER_COLOR,
    borderRadius: 15
  },
  btnQrImage: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: PRIMARY
  },
  btnQrImageLarge: {
    width: 40,
    height: 40,
    marginRight: 5,
    tintColor: PRIMARY
  },
  btnQrText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default ({style, title, onPress, source, enlargeImage}) => {
  const imgStyle = enlargeImage ? styles.btnQrImageLarge : styles.btnQrImage;
  return (
    <TouchableOpacity style={{...styles.btnQr, ...style}} onPress={onPress}>
      {source && <Image style={imgStyle} source={source} tintColor={PRIMARY} />}
      <Text style={styles.btnQrText}>{title}</Text>
    </TouchableOpacity>
  );
};
