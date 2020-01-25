import {NativeModules, Platform} from 'react-native';

export default new (class UXUtils {
  launchSettings() {
    if (Platform.OS === 'android') {
      NativeModules.UXUtilsAndroid.launchSettings();
    } else {
      NativeModules.UXUtilsIOS.launchSettings();
    }
  }
})();
