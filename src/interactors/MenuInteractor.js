import BaseInteractor from './base/BaseInteractor';
import MainStore from '../stores/MainStore';
import QrReader from '../bridges/QrReader';
import QrStore from '../stores/QrStore';
import SoundPlayer from '../bridges/SoundPlayer';
import {handlePermission} from '../utils/Permissions';
import UXUtils from '../bridges/UXUtils';

export default class extends BaseInteractor {
  menuQrPress() {
    MainStore.menuSection = 0;
  }

  menuSoundPress() {
    MainStore.menuSection = 1;
  }

  readQrPress() {
    handlePermission(
      'CAMERA',
      {
        title: 'Camera',
        message: 'This app requires permission to use the camera'
      },
      () => this.onCameraPermissionGiven(),
      () =>
        this.showAlert('Please enable the camera usage in settings', () => UXUtils.launchSettings())
    );
  }

  onCameraPermissionGiven() {
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
