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

@inject('mainStore')
@observer
export default class extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.inter = new MenuInteractor(this);
  }

  render() {
    const {mainStore} = this.props;
    return (
      <Shell>
        <Bkg />
        <BigHeader title="Main Menu" />
        <View style={styles.main}>
          {mainStore.menuSection === 0 && <FragmentQr inter={this.inter} />}
          {mainStore.menuSection === 1 && <FragmentSound inter={this.inter} />}
          <NavPagerBottom
            style={styles.navPager}
            menuQrPress={() => this.inter.menuQrPress()}
            menuSoundPress={() => this.inter.menuSoundPress()}
          />
        </View>
      </Shell>
    );
  }
}
