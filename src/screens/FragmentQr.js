import React from 'react';
import {inject, observer} from 'mobx-react';
import {Text, View} from 'react-native';
import styles from './styles/FragmentQrStyles';
import ButtonLarge from '../components/ButtonLarge';

const FragmentQr = ({inter, qrStore}) => {
  return (
    <View style={styles.fragment}>
      <View style={styles.textQrContainer}>
        <Text style={styles.textQr}>{qrStore.qrContent}</Text>
      </View>
      <View style={styles.btnQrContainer}>
        <ButtonLarge
          title="Press this to launch the camera"
          source={require('../assets/qr-code.png')}
          enlargeImage={true}
          onPress={() => inter.readQrPress()}
        />
      </View>
    </View>
  );
};

export default inject('qrStore')(observer(FragmentQr));
