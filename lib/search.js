import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView, Keyboard } from 'react-native';
import { styles } from './styles.js';

// eslint-disable-next-line react/prop-types
export default function Search({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        clearTextOnFocus
        onSubmitEditing={Keyboard.dismiss}>
        Search:
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
        <Text style={{ color: 'white' }}> GO! </Text>
      </Pressable>


            
    </SafeAreaView>
  );
}
