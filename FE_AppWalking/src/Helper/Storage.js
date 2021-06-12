import AsyncStorage from '@react-native-async-storage/async-storage';

const keyToken = 'ACCESS_TOKEN';

const storage = {
  setToken(token) {
    AsyncStorage.setItem(keyToken, token);
  },
  getToken: () => {
    AsyncStorage.getItem(keyToken).then(value => {
      return value;
    });
  },
  removeToken: () => {
    AsyncStorage.clear();
  },
};

export default storage;
