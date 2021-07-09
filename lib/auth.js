/* eslint-disable max-len */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
// importing CSS like styles object
import { styles } from './styles.js';
import { useState } from 'react/cjs/react.development';

// eslint-disable-next-line react/prop-types
export default function Auth({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


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
        onSubmitEditing={Keyboard.dismiss}>
      </TextInput>

      {/* Move pressable to it's own file, import back into this component*/}
      <Pressable
        // eslint-disable-next-line react/prop-types
        onPress={() => navigation.navigate('Search', { name: 'Search' })}
        style={({ pressed }) => {
          return [
            {
              backgroundColor: pressed
                ? '#1669C2'
                : '#007AFF'
            },
            styles.button,
          ];
        }}>
        <Text style={{ color: 'white' }}> Login </Text>
      </Pressable>

      {/* Move pressable to it's own file, import back into this component*/}
      <Pressable
        onPress={() => { }}
        style={({ pressed }) => {
          return [
            {
              backgroundColor: pressed
                ? '#1669C2'
                : '#007AFF'
            },
            styles.button,
          ];
        }}>
        <Text style={{ color: 'white' }}> Sign Up </Text>
      </Pressable>

      {/* Can set the style of the date, time, battery, etc. along the top border of the device */}
      <StatusBar style="auto" />
    </View>
  );
}
