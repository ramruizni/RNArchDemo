import {Animated, Easing} from 'react-native';

export const FadeTransition = (position, index) => {
  const sceneRange = [index - 1, index];
  const outputOpacity = [0, 1];
  const transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputOpacity
  });
  return {
    opacity: transition
  };
};

export const BottomTransition = (position, index, height) => {
  let sceneRange = [index - 1, index];
  let outputHeight = [height, 0];
  let transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputHeight
  });
  return {
    transform: [{translateY: transition}]
  };
};

export const RightTransition = (position, index, width) => {
  let sceneRange = [index - 1, index];
  let outputWidth = [width, 0];
  let transition = position.interpolate({
    inputRange: sceneRange,
    outputRange: outputWidth
  });
  return {
    transform: [{translateX: transition}]
  };
};
