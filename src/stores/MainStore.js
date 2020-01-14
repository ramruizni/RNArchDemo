import {decorate, observable} from 'mobx';

class MainStore {
  constructor() {
    this.loading = false;
    this.menuSelected = 2;
    this.showPopup = false;
    this.popupContent = null;
  }
}

decorate(MainStore, {
  loading: observable,
  menuSelected: observable,
  showPopup: observable
});

export default new MainStore();
