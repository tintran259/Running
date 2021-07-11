import AsyncStorage from '@react-native-async-storage/async-storage';

const keyToken = 'ACCESS_TOKEN';

const storage = {
  setToken: (token) => {
    return AsyncStorage.setItem(keyToken, token);
  },
  getToken: () => {
    return AsyncStorage.getItem(keyToken)
  },
  removeToken: () => {
    return AsyncStorage.removeItem(keyToken);
  },
};

export default storage;
