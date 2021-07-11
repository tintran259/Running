import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen';
import StackLoginRegister from './Routers/Stack/Login_Register';

import DrawerApp from './Routers/Drawer/DrawerApp';
import AnimatedLoader from 'react-native-animated-loader';

// orthers
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Styles = StyleSheet.create({
  loading: {
    width: 80,
    height: 80,
  },
});

export default function AppRouter() {
  const [isSplash, setisSplash] = useState(true);
  const [Auth, setAuth] = useState(false);
  const [token, setToken] = useState(false);
  const isLoading = useSelector(state => state.App.isLoading);
  const isLogin = useSelector(state => state.Auth.token);
  useEffect(() => {
    setTimeout(() => {
      setisSplash(false);
    }, 2000);
  }, []);
  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then((res) => {
      const data = JSON.parse(res)
      if (data) {
        setToken(data.token);
        return;
      }
      setToken('')
    })

  }, [])
  useEffect(() => {
    if (isLogin === '' || typeof (isLogin) === 'object') {
      setToken('')
      setAuth(false)
      return;
    }
    if (token !== '' || typeof (isLogin) !== 'object' && isLogin !== '') {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [isLogin])

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {isSplash ? (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : Auth || token ? (
            <Stack.Screen name="DrawerApp" component={DrawerApp} />
          ) : (
            <Stack.Screen
              name="StackLoginRegister"
              component={StackLoginRegister}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <AnimatedLoader
        visible={isLoading}
        overlayColor="#000"
        source={require('./Assets/Loading/loading.json')}
        speed={1}
        animationStyle={Styles.loading}
      />
    </>
  );
}
