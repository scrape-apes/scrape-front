import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import Auth from './lib/auth.js'
import Home from './lib/home.js';
import Search from './lib/search.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    // Defines the navigable components of the application
    <NavigationContainer>
      <Stack.Navigator>
        {/* Each Stack.Screen creates a new page that we can route to, defines the Title of the Page and which component it is */}
        <Stack.Screen
          name="Login/Sign up"
          component={Auth} />
        <Stack.Screen
          name="Home"
          component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
