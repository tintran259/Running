import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../Screens/LoginScreen';
import RegisterScreen from '../../Screens/RegisterScreen';

const Stack = createStackNavigator();

export default function StackLoginRegister() {
   return (
      <Stack.Navigator headerMode="none">
         <Stack.Screen name="LoginScreen" component={LoginScreen} />
         <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
   )
}