import BaseInteractor from './base/BaseInteractor';

export default class extends BaseInteractor {
  constructor(screen) {
    super(screen);
    setTimeout(() => {
      alert('To Login');
    }, 1000);
  }
}
