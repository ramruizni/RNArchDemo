import React from 'react';
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import MenuInteractor from '../interactors/MenuInteractor';
import styles from './styles/MenuStyles';
import Shell from './base/Shell';
import Bkg from '../components/Bkg';
import BigHeader from '../components/BigHeader';
import NavPagerBottom from '../components/NavPagerBottom';
import FragmentQr from './FragmentQr';
import FragmentSound from './FragmentSound';

const MenuScreen = ({navigation, mainStore}) => {
  const inter = new MenuInteractor(navigation);
  return (
    <Shell>
      <Bkg />
      <BigHeader title="Main Menu" />
      <View style={styles.main}>
        {mainStore.menuSection === 0 && <FragmentQr inter={inter} />}
        {mainStore.menuSection === 1 && <FragmentSound inter={inter} />}
        <NavPagerBottom
          style={styles.navPager}
          menuQrPress={() => inter.menuQrPress()}
          menuSoundPress={() => inter.menuSoundPress()}
        />
      </View>
    </Shell>
  );
};

MenuScreen.navigationOptions = {header: null};
export default inject('mainStore')(observer(MenuScreen));
