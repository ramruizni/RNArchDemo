import React from 'react';
import {Image, View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
import SplashLogoInteractor from '../interactors/SplashLogoInteractor';
import styles from './styles/SplashLogoStyles';
import Shell from './base/Shell';
import {getFormattedBundleId} from '../utils/Strings';
import Bkg from '../components/Bkg';
import {PRIMARY} from './styles/Commons';

@inject('mainStore')
@observer
export default class extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.inter = new SplashLogoInteractor(this);
  }

  render() {
    return (
      <Shell barStyle="blue">
        <Bkg />
        <View style={styles.mainCentering}>
          <Image style={styles.logo} source={require('../assets/logo-react.png')} resizeMode="contain" tintColor={PRIMARY} />
          <Text style={styles.text}>RN Arch Demo</Text>
          <Text style={styles.versionText}>Version {getFormattedBundleId()}</Text>
        </View>
      </Shell>
    );
  }
}
