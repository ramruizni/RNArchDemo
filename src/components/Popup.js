import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {statusBarHeight} from '../utils/UI';
import MainStore from '../stores/MainStore';

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(200,200,200,0.4)',
    position: 'absolute',
    top: statusBarHeight(),
    zIndex: 99999999999
  }
});

export default class extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.main}
        onPress={() => {
          MainStore.showPopup = false;
        }}>
        {this.props.content}
      </TouchableOpacity>
    );
  }
}
