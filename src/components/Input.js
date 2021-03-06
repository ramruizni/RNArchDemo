import React, {useState, useRef} from 'react';
import {TextInput, View, Text, Animated, Image} from 'react-native';
import {
  styles,
  ANIMATION_DURATION,
  FONT_SIZE_PLACEHOLDER,
  FONT_SIZE_VALUE,
  getMainWidth,
  getInputWidth,
  IMAGE_SIZE
} from './styles/InputStyles';
import {PRIMARY} from '../screens/styles/Commons';

export default ({value, placeholder, image, onChangeText, keyboardType, error, width, onBlur}) => {
  const [isFieldActive, setIsFieldActive] = useState(0);
  const position = useRef(new Animated.Value(value ? 1 : 0)).current;

  const handleFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: ANIMATION_DURATION
      }).start();
    }
  };

  const handleBlur = () => {
    onBlur();
    if (isFieldActive && !value) {
      setIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: ANIMATION_DURATION
      }).start();
    }
  };

  const animatedTitleStyles = () => {
    return {
      top: position.interpolate({
        inputRange: [0, 1],
        outputRange: [FONT_SIZE_VALUE, 0]
      }),
      fontSize: isFieldActive ? FONT_SIZE_PLACEHOLDER : FONT_SIZE_VALUE
    };
  };

  return (
    <View style={{...styles.main, width: getMainWidth(width)}}>
      {image && <Image style={styles.leftImage} source={image} tintColor={PRIMARY} />}
      <View>
        <Animated.Text style={[styles.placeholder, animatedTitleStyles()]}>
          {placeholder}
        </Animated.Text>
        <TextInput
          style={{...styles.input, width: getInputWidth(width, image)}}
          value={value}
          onChangeText={onChangeText}
          onBlur={handleBlur}
          onFocus={handleFocus}
          keyboardType={keyboardType}
          returnKeyType="done"
          underlineColorAndroid="transparent"
          spellCheck={false}
          autoCorrect={false}
          selectionColor={'lightpink'}
        />
        <View style={{...styles.underline, width: getInputWidth(width, image) - IMAGE_SIZE + 12}} />
        <Text style={styles.error} numberOfLines={1}>
          {error}
        </Text>
      </View>
    </View>
  );
};
