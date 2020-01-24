import {Platform, NativeModules} from 'react-native';
import Callback from './Callback';

export default new (class QrReader {
  constructor() {
    if (Platform.OS === 'android') {
      this.manager = NativeModules.QrReaderAndroid;
    } else {
      this.manager = NativeModules.QrReaderIOS;
    }
  }

  startScan() {
    return new Promise((resolve, reject) => {
      this.manager.startScan(Callback('startScan', resolve, reject));
    });
  }
})();
