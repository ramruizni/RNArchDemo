import React from 'react';
import styles from '../styles/CommonStyles';
import {inject, observer} from 'mobx-react';
import LoadingView from '../../components/LoadingView';
import Popup from '../../components/Popup';
import CustomStatusBar from '../../components/CustomStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';

@inject('mainStore')
@observer
export default class extends React.Component {
  render() {
    const mainStore = this.props.mainStore;
    return (
      <>
        {mainStore.loading && <LoadingView />}
        {mainStore.showPopup && <Popup content={mainStore.popupContent} />}
        <CustomStatusBar barStyle={this.props.barStyle} />
        <SafeAreaView style={styles.main} {...this.props}>
          {this.props.children}
        </SafeAreaView>
      </>
    );
  }
}
