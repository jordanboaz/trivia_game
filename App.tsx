import React from 'react';
import { Provider, useDispatch } from 'react-redux';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { rootStore } from './src/store/rootReducer';
import { Home } from './src/views';

export default function App() {
  return (
    <Provider store={rootStore}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
