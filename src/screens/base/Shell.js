import React from 'react';
import styles from '../styles/CommonStyles';
import {inject, observer} from 'mobx-react';
import LoadingView from '../../components/LoadingView';
import Popup from '../../components/Popup';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const Shell = props => {
  const {mainStore} = props;
  return (
    <>
      {mainStore.loading && <LoadingView />}
      {mainStore.showPopup && <Popup content={mainStore.popupContent} />}
      <StatusBar translucent backgroundColor="#252E48" barStyle="light-content" />
      <SafeAreaView style={styles.shell} {...props}>
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default inject('mainStore')(observer(Shell));
