import {decorate, observable} from 'mobx';

class UserStore {
  constructor() {
    this.bank = null;
    this.email = null;
    this.password = null;

    this.banks = [
      {id: 1, description: 'Bank of America'},
      {id: 2, description: 'BANCOLOMBIA'},
      {id: 3, description: 'BBVA'}
    ];
  }
}

decorate(UserStore, {
  bank: observable,
  email: observable,
  password: observable
});

export default new UserStore();
