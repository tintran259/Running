/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Provider } from 'react-redux'
import Store from './Store'

import AppRouter from './AppRouter'

export default function App() {
   return (
      <Provider store={Store}>
         <AppRouter />
      </Provider>
   );
};



