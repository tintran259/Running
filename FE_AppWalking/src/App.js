/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {MultiSettingContextProvider} from './Context/MultiSetting';
import Store from './Store';

import AppRouter from './AppRouter';

export default function App() {
  return (
    <Provider store={Store}>
      <MultiSettingContextProvider>
        <AppRouter />
      </MultiSettingContextProvider>
    </Provider>
  );
}
