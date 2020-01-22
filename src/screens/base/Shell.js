import React from 'react';
import styles from '../styles/CommonStyles';
import {inject, observer} from 'mobx-react';
import LoadingView from '../../components/LoadingView';
import Popup from '../../components/Popup';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

@inject('mainStore')
@observer
export default class extends React.Component {
  render() {
    const mainStore = this.props.mainStore;
    return (
      <>
        {mainStore.loading && <LoadingView />}
        {mainStore.showPopup && <Popup content={mainStore.popupContent} />}
        <StatusBar translucent backgroundColor="#252E48" barStyle="light-content" />
        <SafeAreaView style={styles.main} {...this.props}>
          {this.props.children}
        </SafeAreaView>
      </>
    );
  }
}
