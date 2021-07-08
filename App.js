import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Auth from './lib/auth.js';
import Search from './lib/search.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login/Sign up"
          component={Auth} />
        <Stack.Screen
          name="Search"
          component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
