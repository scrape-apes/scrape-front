import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';

import Auth from './lib/auth.js';
import Search from './lib/search.js';
import Details from './lib/details.js';
import Bot from './lib/bot.js';

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(false);

  return (

    // Defines the navigable components of the application
    <NavigationContainer>

      <Stack.Navigator>
        {/* Each Stack.Screen creates a new page that we can route to, defines the Title of the Page and which component it is */}
        <Stack.Screen
          name="Login/Sign up"
          component={Auth} />
        <Stack.Screen
          name="Search"
          component={Search} />
        <Stack.Screen
          name="Details"
          component={Details} />
          <Stack.Screen 
            name="Bot"
            component={Bot}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
