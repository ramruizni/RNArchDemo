import BaseInteractor from './base/BaseInteractor';

export default class extends BaseInteractor {
  constructor(screen) {
    super(screen);
    setTimeout(() => {
      this.navigateClearingStack('LoginScreen');
    }, 2000);
  }
}
