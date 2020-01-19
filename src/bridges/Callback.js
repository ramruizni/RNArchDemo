import MainStore from '../stores/MainStore';

export default function callback(serviceName, resolve, reject) {
  return (error, success) => {
    if (error === null) {
      MainStore.loading = false;
      console.log(`${serviceName} success:`);
      console.log(success);
      resolve(success);
    } else {
      MainStore.loading = false;
      console.log(`${serviceName} error:`);
      console.log(error);
      reject(error);
    }
  };
}
