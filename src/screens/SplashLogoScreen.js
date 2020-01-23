import React from 'react';
import {Image, View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
import SplashLogoInteractor from '../interactors/SplashLogoInteractor';
import styles from './styles/SplashLogoStyles';
import Shell from './base/Shell';
import {getFormattedBundleId} from '../utils/Strings';
import Bkg from '../components/Bkg';
import {PRIMARY} from './styles/Commons';
import {useForm} from '../utils/useForm';

const SplashLogoScreen = ({navigation}) => {
  const [values, handleChange] = useForm({bank: null, email: '', password: ''});
  const inter = new SplashLogoInteractor(navigation);
  return (
    <Shell>
      <Bkg />
      <View style={styles.main}>
        <Image
          style={styles.logo}
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

SplashLogoScreen.navigationOptions = {header: null};
export default SplashLogoScreen;
