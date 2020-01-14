import React from 'react';
import {Provider} from 'mobx-react';
import MainStore from './stores/MainStore';
import StackNavigator from './StackNavigator';

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
      mainStore: MainStore
    };
    return (
      <Provider {...stores}>
        <StackNavigator />
      </Provider>
    );
  }
}
