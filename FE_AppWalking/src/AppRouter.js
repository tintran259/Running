import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen'
import StackLoginRegister from './Routers/Stack/Login_Register'

import HomePage from './Screens/HomeScreen'
import DrawerApp from './Routers/Drawer/DrawerApp'

const Stack = createStackNavigator();


export default function AppRouter() {

   const [isSplash, setisSplash] = useState(false)
   useEffect(() => {
      setTimeout(() => {
         setisSplash(false)
      }, 2000)
   }, [])
   return (
      <NavigationContainer>
         <Stack.Navigator headerMode="none">
            {
               isSplash ?
                  <Stack.Screen name="SplashScreen" component={SplashScreen} />
                  :
                  <Stack.Screen name="StackLoginRegister" component={DrawerApp} />
            }
         </Stack.Navigator>
      </NavigationContainer>
   )
}
