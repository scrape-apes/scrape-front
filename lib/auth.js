/* eslint-disable max-len */
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text, View, TextInput,
  Pressable, Keyboard,
  ActivityIndicator
} from 'react-native';
// importing CSS like styles object

import { styles, handlePressStyle } from './utils/styles.js';

// eslint-disable-next-line react/prop-types
export default function Auth({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState('');

  handlePress = (string) => {
    if (!username || !password) {
      return alert('Missing Username or Password')
    }

    setIsLoading(true)

    return fetch(`https://project-scrape.herokuapp.com/api/auth/${string}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    }
    )
      .then(response => response.json())
      .then((response) => {
        if (!!response.message) {
          return alert(response.message)
        }
        navigation.navigate('Search', { name: 'Search' })
      })
      .then(() => setIsLoading(false))
  }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ActivityIndicator size="large" color='0000ff' />

      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Standard text input, default behavior is to bring up keyboard, however, it does not during development in xcode */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        onSubmitEditing={Keyboard.dismiss}
      >
      </TextInput>

      {/* Standard text input, default behavior is to bring up keyboard, however, it does not during development in xcode */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        onSubmitEditing={Keyboard.dismiss}
      >
      </TextInput>

      {/* Move pressable to it's own file, import back into this component*/}

      <Pressable
        // eslint-disable-next-line react/prop-types
        onPress={() => handlePress('login')}
        style={({ pressed }) => handlePressStyle(pressed)}>

        <Text style={{ color: 'white' }}> Login </Text>
      </Pressable>

      {/* Move pressable to it's own file, import back into this component*/}

      <Pressable
        onPress={() => handlePress('signup')}

        style={({ pressed }) => handlePressStyle(pressed)}>

        <Text style={{ color: 'white' }}> Sign Up </Text>
      </Pressable>

      {/* Can set the style of the date, time, battery, etc. along the top border of the device */}
      <StatusBar style="auto" />
    </View>
  );
}

