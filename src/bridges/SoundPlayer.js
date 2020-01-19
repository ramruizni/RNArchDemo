import { Platform, NativeModules} from "react-native"

export default new (class QrReader {
  constructor() {
    if (Platform.OS === 'android') {
      this.manager = NativeModules.SoundPlayerAndroid;
    } else {
      this.manager = NativeModules.SoundPlayerIOS;
    }
  }

  play() {
    this.manager.play();
  }

  stop() {
    this.manager.stop();
  }

})();
