import React from 'react';
import {inject, observer} from 'mobx-react';
import {Text, View} from 'react-native';
import styles from './styles/FragmentQrStyles';
import ButtonLarge from '../components/ButtonLarge';

@inject('qrStore')
@observer
export default class extends React.Component {
  render() {
    return (
      <View style={styles.fragment}>
        <View style={styles.textQrContainer}>
          <Text style={styles.textQr}>{this.props.qrStore.qrContent}</Text>
        </View>
        <View style={styles.btnQrContainer}>
          <ButtonLarge
            title="Press this to launch the camera"
            source={require('../assets/qr-code.png')}
            enlargeImage={true}
            onPress={() => this.props.inter.readQrPress()}
          />
        </View>
      </View>
    );
  }
}
