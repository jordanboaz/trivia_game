import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';

import { Home, Quiz, Results } from '../views';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: FunctionComponent = () => (
  <>
    <StatusBar backgroundColor="#E0E0E0" barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerStyle: { backgroundColor: '#3462e0' },
          headerTintColor: '#FFF',
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, title: '' }} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Results" component={Results} options={{ headerShown: false, title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);

export default RootNavigator;
