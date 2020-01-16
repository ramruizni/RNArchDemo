import React from 'react';
import {Platform, StatusBar} from 'react-native';
import Alert from '../components/Alert';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import * as Yup from 'yup';

export function statusBarHeight() {
  return Platform.OS === 'ios' ? getStatusBarHeight() : StatusBar.currentHeight;
}

export function customAlert(message, acceptPress, cancelPress, image, title) {
  return <Alert image={image} title={title} message={message} acceptPress={acceptPress} cancelPress={cancelPress} />;
}

export function getYupField(regExp, required) {
  if (required) {
    return Yup.string()
      .nullable()
      .required('Por favor ingresa este campo')
      .matches(regExp, 'Campo inválido');
  }
  return Yup.string()
    .nullable()
    .matches(regExp, 'Campo inválido');
}
