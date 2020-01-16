import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MainStore from '../stores/MainStore';

const styles = StyleSheet.create({
  main: {
    width: wp('72%'),
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  viewButton: {
    flexDirection: 'row',
    width: wp('72%')
  },
  button: {
    width: wp('72%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: 'lightgray'
  },
  doubleButton: {
    width: wp('36%'),
    height: wp('12%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: 'lightgray'
  },
  doubleButtonBorder: {
    width: 0.5,
    height: wp('12%'),
    backgroundColor: 'lightgray'
  },
  title: {
    top: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  message: {
    fontSize: 15,
    marginTop: 10,
    width: wp('60%'),
    marginBottom: 10,
    textAlign: 'center'
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF'
  },
  textButtonCancel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red'
  },
  viewImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    top: 10,
    width: wp('40%'),
    marginBottom: 4
  }
});

export default ({message, acceptPress, cancelPress, image, title}) => {
  const getImage = name => {
    if (name === 'CORRECT') return require('../assets/correct.png');
    else return null;
  };

  return (
    <View style={styles.main}>
      <View style={styles.viewImage}>
        <Image style={styles.image} source={getImage(image)} resizeMode="center" />
      </View>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Text style={styles.message}>{message}</Text>
      {cancelPress ? (
        <View style={styles.viewButton}>
          <TouchableOpacity
            style={styles.doubleButton}
            onPress={() => {
              if (cancelPress !== undefined) cancelPress();
              MainStore.showPopup = false;
            }}>
            <Text style={styles.textButtonCancel}>Cancelar</Text>
          </TouchableOpacity>
          <View style={styles.doubleButtonBorder} />
          <TouchableOpacity
            style={styles.doubleButton}
            onPress={() => {
              if (acceptPress !== undefined) acceptPress();
              MainStore.showPopup = false;
            }}>
            <Text style={styles.textButton}>Aceptar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (acceptPress !== undefined) acceptPress();
            MainStore.showPopup = false;
          }}>
          <Text style={styles.textButton}>Aceptar</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
