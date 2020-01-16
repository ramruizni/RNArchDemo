import BaseInteractor from './base/BaseInteractor';

export default class extends BaseInteractor {
  constructor(screen) {
    super(screen);
  }

  handleLogin() {
    alert("login")
  }
}
