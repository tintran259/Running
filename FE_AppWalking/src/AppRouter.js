import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen';
import StackLoginRegister from './Routers/Stack/Login_Register';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomePage from './Screens/HomeScreen';
import DrawerApp from './Routers/Drawer/DrawerApp';
import AnimatedLoader from 'react-native-animated-loader';

// orthers
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();
const Styles = StyleSheet.create({
  loading: {
    width: 80,
    height: 80,
  },
});

export default function AppRouter() {
  const [isSplash, setisSplash] = useState(true);
  const isLoading = useSelector(state => state.App.isLoading);
  const isLogin = useSelector(state => state.App.isLogin);
  const [accessToken, setAccessToken] = useState('');
  console.log('accessToken:', accessToken, isLogin);
  useEffect(() => {
    AsyncStorage.getItem('ACCESS_TOKEN').then(value => {
      setAccessToken(value);
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setisSplash(false);
    }, 2000);
  }, []);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {isSplash ? (
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          ) : (isLogin && accessToken) || isLogin || accessToken ? (
            <Stack.Screen name="StackLoginRegister" component={DrawerApp} />
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
