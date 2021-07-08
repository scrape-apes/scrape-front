import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

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
    
    <StatusBar style="auto" />
  </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 3,
    borderWidth: 1,
    width: 200,
    margin: 4
  }
});