import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';

import { Quiz, Results } from '../views';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator: FunctionComponent = () => (
  <>
    <StatusBar backgroundColor="#E0E0E0" barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator
        headerMode="screen"
        screenOptions={{
          headerStyle: { backgroundColor: 'rgba(15, 41, 189, 0.75)' },
          headerTintColor: '#FFF',
        }}
      >

        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  </>
);
{ /* <Stack.Screen
        options={{ headerShown: false, title: '' }}
        name="HomeScreen"
        component={HomeScreen}
      /> */ }

export default RootNavigator;
