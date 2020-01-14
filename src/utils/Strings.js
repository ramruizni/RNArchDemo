import DeviceInfo from 'react-native-device-info';

export function getFormattedBundleId() {
    let string = DeviceInfo.getVersion();
    let bundleId = DeviceInfo.getBundleId();
    if (bundleId.endsWith('dev')) {
        return string + ' ' + 'Dev';
    } else if (bundleId.endsWith('lab')) {
        return string + ' ' + 'Lab';
    } else {
        return string;
    }
}
