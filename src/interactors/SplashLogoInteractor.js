import BaseInteractor from './base/BaseInteractor';

export default class extends BaseInteractor {
  handleSplash(spin) {
    spin();
    setTimeout(() => {
      this.navigateClearingStack('LoginScreen');
    }, 2000);
  }
}
