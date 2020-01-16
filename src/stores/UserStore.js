import {decorate, observable} from 'mobx';

class UserStore {
  constructor() {
    this.bank = null;
    this.email = null;
    this.password = null;

    this.banks = [
      {id: 1, description: 'JPMorgan Chase'},
      {id: 2, description: 'Bank of America'},
      {id: 3, description: 'Citigroup'},
      {id: 4, description: 'Wells Fargo & Co.'},
      {id: 5, description: 'Goldman Sachs'},
      {id: 6, description: 'Morgan Stanley'},
      {id: 7, description: 'U.S. Bancorp'},
      {id: 8, description: 'PNC Financial Services'},
    ];
  }
}

decorate(UserStore, {
  bank: observable,
  email: observable,
  password: observable
});

export default new UserStore();
