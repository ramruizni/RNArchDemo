import React, {useState, useRef} from 'react';
import {TouchableOpacity, TextInput, View, Text, Animated, Image} from 'react-native';
import {
  styles,
  ANIMATION_DURATION,
  FONT_SIZE_PLACEHOLDER,
  FONT_SIZE_VALUE,
  INPUT_COLOR,
  getMainWidth,
  getInputWidth,
  IMAGE_SIZE
} from './styles/InputStyles';

export default ({value, placeholder, image, onChangeText, keyboardType, error}) => {
  const [isFieldActive, setIsFieldActive] = useState(0);
  const position = useRef(new Animated.Value(value ? 1 : 0)).current;

  const onFocus = () => {
    if (!isFieldActive) {
      setIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: ANIMATION_DURATION
      }).start();
    }
  };

  const onBlur = () => {
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
      {image && <Image style={styles.leftImage} source={image} />}
      <TouchableOpacity
        style={styles.rightBtn}
        onPress={() => {
          alert('Shiet');
        }}>
        <Image source={require('../../assets/x-blue.png')} />
      </TouchableOpacity>
      <View>
        <Animated.Text style={[styles.placeholder, animatedTitleStyles()]}>{placeholder}</Animated.Text>
        <TextInput
          style={{...styles.input, width: getInputWidth(width, image)}}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          returnKeyType="done"
          underlineColorAndroid="transparent"
          spellCheck={false}
          autoCorrect={false}
          onFocus={onFocus}
          onBlur={onBlur}
          selectionColor={INPUT_COLOR}
        />
        <View style={{...styles.underline, width: getInputWidth(width, image) - IMAGE_SIZE + 12}} />
        <Text style={styles.error} numberOfLines={1}>
          {error}
        </Text>
      </View>
    </View>
  );
};
