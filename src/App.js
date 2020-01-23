import React from 'react';
import {Provider} from 'mobx-react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStore from './stores/MainStore';
import StackNavigator from './StackNavigator';
import UserStore from './stores/UserStore';
import QrStore from './stores/QrStore';

export default () => {
  const hardwareBackPress = () => {
    if (MainStore.showPopup) {
      MainStore.showPopup = false;
      return true;
    }
    return MainStore.loading;
  };

  const stores = {
    mainStore: MainStore,
    userStore: UserStore,
    qrStore: QrStore
  };

  return (
    <Provider {...stores}>
      <SafeAreaProvider>
        <StackNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};
