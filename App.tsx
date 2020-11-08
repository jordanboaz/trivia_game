import React from 'react';
import { Provider, useDispatch } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { rootStore } from './src/store/rootReducer';
import { Home } from './src/views';

export default function App() {
  return (
    <Provider store={rootStore}>
      <StatusBar style="auto" />
      <Home />
    </Provider>
  );
}
