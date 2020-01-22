import BaseInteractor from './base/BaseInteractor';

export default class extends BaseInteractor {
  handleLogin() {
    super.navigate('MenuScreen');
  }
}
