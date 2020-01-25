import {PermissionsAndroid, Platform} from 'react-native';
import {check, request} from 'react-native-permissions';

function getPlatformID(name) {
  if (Platform.OS === 'android') {
    switch (name) {
      case 'CONTACTS':
        return 'android.permission.READ_CONTACTS';
      case 'CAMERA':
        return 'android.permission.CAMERA';
      case 'CALENDAR':
        return 'android.permission.READ_CALENDAR';
      default:
        return 'Permission ID not found';
    }
  } else {
    switch (name) {
      case 'CONTACTS':
        return 'ios.permission.CONTACTS';
      case 'CAMERA':
        return 'ios.permission.CAMERA';
      case 'CALENDAR':
        return 'ios.permission.CALENDARS';
      default:
        throw 'Permission ID not found';
    }
  }
}

export function handlePermission(type, rationaleAndroid, onGrant, onBlock) {
  if (Platform.OS === 'android') {
    handlePermissionAndroid(getPlatformID(type), rationaleAndroid, onGrant, onBlock);
  } else {
    handlePermissionIOS(getPlatformID(type), onGrant, onBlock);
  }
}

function handlePermissionAndroid(type, request, onGrant, onBlock) {
  PermissionsAndroid.request(type, request)
    .then(result => {
      if (result === 'granted') {
        onGrant();
      } else if (result === 'never_ask_again') {
        onBlock();
      }
    })
    .catch(error => {
      console.log('Something failed at permission retrieval:');
      console.log(error);
      onBlock();
    });
}

function handlePermissionIOS(type, onGrant, onBlock) {
  check(type)
    .then(result => {
      switch (result) {
        case 'granted':
          onGrant();
          break;
        case 'denied':
          request(type).then(success => {
            if (success === 'granted') {
              onGrant();
            }
          });
          break;
        default:
          onBlock();
          break;
      }
    })
    .catch(error => {
      console.log('Something failed at permission retrieval:');
      console.log(error);
      onBlock();
    });
}
