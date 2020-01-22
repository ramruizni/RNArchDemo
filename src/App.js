import React from 'react';
import {Provider} from 'mobx-react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MainStore from './stores/MainStore';
import StackNavigator from './StackNavigator';
import {BackHandler} from 'react-native';
import UserStore from './stores/UserStore';
import QrStore from './stores/QrStore';

export default class App extends React.Component {
  hardwareBackPress() {
    if (MainStore.showPopup) {
      MainStore.showPopup = false;
      return true;
    }
    return MainStore.loading;
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  render() {
    console.disableYellowBox = true;
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
  }
}