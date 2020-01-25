import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BORDER_COLOR, BORDER_WIDTH, BUTTONS} from '../screens/styles/Commons';

const styles = StyleSheet.create({
  main: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  button: {
    width: '50%',
    borderColor: BORDER_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: BORDER_WIDTH,
    borderBottomWidth: 0,
    backgroundColor: BUTTONS
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default class extends React.Component {
  state = {
    selected: 0,
    heightLeft: new Animated.Value(60),
    heightRight: new Animated.Value(60)
  };

  animate = selected => {
    this.setState({selected});
    Animated.parallel([
      Animated.timing(selected === 0 ? this.state.heightLeft : this.state.heightRight, {
        toValue: 66,
        duration: 100
      }),
      Animated.timing(selected === 0 ? this.state.heightRight : this.state.heightLeft, {
        toValue: 60,
        duration: 100
      })
    ]).start();
  };

  render() {
    const animStylesLeft = {height: this.state.heightLeft};
    const animStylesRight = {height: this.state.heightRight};
    const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

    return (
      <View style={{...styles.main, ...this.props.style}}>
        <AnimatedTouchable
          style={[styles.button, animStylesLeft]}
          onPress={() => {
            this.props.menuQrPress();
            this.animate(0);
          }}>
          <Text style={styles.buttonText}>Read QR</Text>
        </AnimatedTouchable>

        <AnimatedTouchable
          style={{...styles.button, ...animStylesRight}}
          onPress={() => {
            this.props.menuSoundPress();
            this.animate(1);
          }}>
          <Text style={styles.buttonText}>Play Sound</Text>
        </AnimatedTouchable>
      </View>
    );
  }
}
