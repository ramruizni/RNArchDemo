import React from 'react';
import {Platform, StatusBar} from 'react-native';
import Alert from '../components/Alert';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export function statusBarHeight() {
  if (Platform.OS === 'android') return StatusBar.currentHeight;
  return getStatusBarHeight(true);
}

export function customAlert(message, acceptPress, cancelPress, image, title) {
  return (
    <Alert
      image={image}
      title={title}
      message={message}
      acceptPress={acceptPress}
      cancelPress={cancelPress}
    />
  );
}
