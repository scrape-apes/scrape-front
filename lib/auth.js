/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';
import { styles } from './styles.js';

// eslint-disable-next-line react/prop-types
export default function Auth({ navigation }) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        clearTextOnFocus
        placeholder="Username"
        onSubmitEditing={Keyboard.dismiss}
      >
      </TextInput>

      <TextInput
        style={styles.input}
        clearTextOnFocus secureTextEntry
        placeholder="Password"
        onSubmitEditing={Keyboard.dismiss}>
      </TextInput>


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

      <StatusBar style="auto" />
    </View>
  );
}
