import BaseInteractor from './base/BaseInteractor';
import UserStore from '../stores/UserStore';

export default class extends BaseInteractor {
  handleLogin(values) {
    UserStore.bank = values.bank;
    UserStore.email = values.email;
    UserStore.password = values.password;
    super.navigate('MenuScreen');
  }
}
