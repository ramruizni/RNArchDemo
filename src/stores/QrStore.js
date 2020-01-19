import {decorate, observable} from 'mobx';

class QrStore {
  constructor() {
    this.qrContent = "The QR's content will appear here...";
  }
}

decorate(QrStore, {
  qrContent: observable
});

export default new QrStore();
