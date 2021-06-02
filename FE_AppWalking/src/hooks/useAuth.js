import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuth = () => {
  const [token, setToken] = useState(' ');
  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then(value => {
      setToken(value);
    });
  }, []);
  if (token) {
    console.log('Co Token:', token);
  } else {
    console.log('Khong Co Token:', token);
  }
};

export default useAuth;
