import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from './src/store/rootReducer';
import Router from './src/router/RootNavigator';

export default function App() {
  return (
    <Provider store={rootStore}>
      <Router />
    </Provider>
  );
}
