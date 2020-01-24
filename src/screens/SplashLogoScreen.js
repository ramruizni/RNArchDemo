import React from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import SplashLogoInteractor from '../interactors/SplashLogoInteractor';
import styles from './styles/SplashLogoStyles';
import Shell from './base/Shell';
import {getFormattedBundleId} from '../utils/Strings';
import Bkg from '../components/Bkg';
import {PRIMARY} from './styles/Commons';

const SplashLogoScreen = ({navigation}) => {
  const spinValue = new Animated.Value(0);
  const spin = () => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => spin());
  };
  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const inter = new SplashLogoInteractor(navigation);
  inter.handleSplash(spin);

  return (
    <Shell>
      <Bkg />
      <View style={styles.main}>
        <Animated.Image
          style={{...styles.logo, transform: [{rotate: spinInterpolate}]}}
          source={require('../assets/logo-react.png')}
          resizeMode="contain"
          tintColor={PRIMARY}
        />
        <Text style={styles.text}>RN Arch Demo</Text>
        <Text style={styles.versionText}>Version {getFormattedBundleId()}</Text>
      </View>
    </Shell>
  );
};

export default SplashLogoScreen;
