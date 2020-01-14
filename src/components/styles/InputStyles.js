import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const FONT_SIZE_VALUE = 18;
export const FONT_SIZE_PLACEHOLDER = 13;
export const ANIMATION_DURATION = 150;
export const INPUT_COLOR = '#0433A0';
export const GRAY_UNDERLINE_COLOR = 'rgba(128,128,128,0.50)';
export const IMAGE_SIZE = 20;

export const styles = StyleSheet.create({
  main: {
    marginVertical: wp('4%'),
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  placeholder: {
    fontSize: FONT_SIZE_PLACEHOLDER,
    color: 'gray',
    marginBottom: -5
  },
  input: {
    fontSize: FONT_SIZE_VALUE,
    color: INPUT_COLOR,
    paddingVertical: 0
  },
  underline: {
    height: 1.4,
    backgroundColor: GRAY_UNDERLINE_COLOR,
    marginTop: -2,
    width: wp('86%') - IMAGE_SIZE
  },
  error: {
    fontSize: FONT_SIZE_PLACEHOLDER,
    color: 'red'
  },
  leftImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginRight: 10
  },
  rightBtn: {
    width: 40,
    height: 40,
    position: 'absolute',
    end: 6,
    zIndex: 1000,
    padding: 14,
    resizeMode: 'contain'
  }
});

export const getMainWidth = props => {
  return props.width ? wp(props.width) : wp('90%');
};

export const getInputWidth = props => {
  let width = props.width ? wp(props.width) - 18 : wp('90%') - 18;
  return props.image ? width - IMAGE_SIZE - 10 : width;
};
