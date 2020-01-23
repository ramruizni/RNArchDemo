import React from 'react';
import {inject, observer} from 'mobx-react';
import {View} from 'react-native';
import styles from './styles/FragmentSoundStyles';
import ButtonLarge from '../components/ButtonLarge';

const FragmentSound = ({inter}) => {
  return (
    <View style={styles.fragment}>
      <View style={styles.main}>
        <ButtonLarge
          style={styles.btn}
          title="Play Sound"
          source={require('../assets/play.png')}
          onPress={() => inter.playSoundPress()}
        />
        <ButtonLarge
          style={styles.btn}
          title="Stop Sound"
          source={require('../assets/stop.png')}
          onPress={() => inter.stopSoundPress()}
        />
      </View>
    </View>
  );
};

export default inject()(observer(FragmentSound));
