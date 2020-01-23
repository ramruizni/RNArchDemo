import React from 'react';
import {NavigationActions, StackActions} from 'react-navigation';
import MainStore from '../../stores/MainStore';
import {customAlert} from '../../utils/UI';

export default class {
  constructor(navigation) {
    this.navigation = navigation;
  }

  navigate(screen, params) {
    this.navigation.navigate(screen, params);
  }

  navigateClearingStack(screen) {
    this.navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({routeName: screen})]
      })
    );
  }

  navigateBack() {
    this.navigation.goBack(null);
  }

  showAlert(message, acceptPress, cancelPress, image, title) {
    MainStore.popupContent = customAlert(message, acceptPress, cancelPress, image, title);
    MainStore.showPopup = true;
  }

  showError(text, acceptPress) {
    this.showAlert(text, acceptPress, null, null, 'Error');
  }
}
