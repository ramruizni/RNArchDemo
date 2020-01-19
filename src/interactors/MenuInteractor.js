import BaseInteractor from './base/BaseInteractor';
import MainStore from '../stores/MainStore';
import QrReader from '../bridges/QrReader';
import QrStore from '../stores/QrStore';
import SoundPlayer from '../bridges/SoundPlayer';

export default class extends BaseInteractor {
  menuQrPress() {
    MainStore.menuSection = 0;
  }

  menuSoundPress() {
    MainStore.menuSection = 1;
  }

  readQrPress() {
    QrReader.startScan()
      .then(success => {
        QrStore.qrContent = success;
      })
      .catch(error => {
        QrStore.qrContent = error;
      });
  }

  playSoundPress() {
    SoundPlayer.play();
  }

  stopSoundPress() {
    SoundPlayer.stop();
  }
}
