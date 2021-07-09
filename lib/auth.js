/* eslint-disable max-len */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, Keyboard } from 'react-native';
// importing CSS like styles object
import { styles } from './styles.js';

// eslint-disable-next-line react/prop-types
export default function Auth({ navigation }) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onSubmitEditing={Keyboard.dismiss}
      >
      </TextInput>

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
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
