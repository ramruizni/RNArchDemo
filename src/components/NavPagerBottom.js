import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Animated} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {BKG_LIGHT, BORDER_COLOR, BORDER_WIDTH, BUTTONS} from '../screens/styles/Commons';

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
    borderTopWidth: BORDER_WIDTH,
    backgroundColor: BUTTONS
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default ({style, menuQrPress, menuSoundPress}) => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const [selected, setSelected] = useState(0);
  const stylesLeft = {
    height: new Animated.Value(60),
    width: new Animated.Value(wp('50%')),
    backgroundColor: selected === 0 ? BUTTONS : BKG_LIGHT
  };
  const stylesRight = {
    height: new Animated.Value(60),
    width: new Animated.Value(wp('50%')),
    backgroundColor: selected === 1 ? BUTTONS : BKG_LIGHT
  };

  const WIDTH_SELECTED = wp('51%');
  useEffect(() => {
    Animated.parallel([
      Animated.timing(selected === 0 ? stylesLeft.width : stylesRight.width, {
        toValue: WIDTH_SELECTED,
        duration: 100
      }),
      Animated.timing(selected === 0 ? stylesLeft.height : stylesRight.height, {
        toValue: 62,
        duration: 100
      }),
      Animated.timing(selected === 0 ? stylesRight.height : stylesLeft.height, {
        toValue: 60,
        duration: 100
      })
    ]).start();
  }, [selected]);

  return (
    <View style={{...styles.main, ...style}}>
      <AnimatedTouchable
        style={{...styles.button, ...stylesLeft}}
        onPress={() => {
          menuQrPress();
          setSelected(0);
        }}>
        <Text style={styles.buttonText}>Read QR</Text>
      </AnimatedTouchable>

      <AnimatedTouchable
        style={{...styles.button, ...stylesRight}}
        onPress={() => {
          menuSoundPress();
          setSelected(1);
        }}>
        <Text style={styles.buttonText}>Play Sound</Text>
      </AnimatedTouchable>
    </View>
  );
};
