import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './styles.js';

export default function Auth({ navigation }) {
  return (
  <View style={styles.container}>

    <TextInput 
    style={styles.input} 
    clearTextOnFocus>
      Search Here
    </TextInput>

    <TextInput 
    style={styles.input} 
    clearTextOnFocus secureTextEntry>
      Password
    </TextInput>

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
          ]
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
          ]
      }}>
      <Text style={{ color: 'white' }}> Sign Up </Text>
    </Pressable>

    <StatusBar style="auto" />
  </View>
)}
