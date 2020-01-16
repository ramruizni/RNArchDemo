import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {statusBarHeight} from '../utils/UI';

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: statusBarHeight()
  }
});

export default () => {
  return (
    <View style={styles.main}>
      <StatusBar translucent backgroundColor="#252E48" barStyle="light-content" />
    </View>
  );
};
