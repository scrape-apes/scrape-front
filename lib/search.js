import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, SafeAreaView, Keyboard } from 'react-native';
import { styles } from './styles.js';

const URL = 'http://localhost:7890/api/v1/results'

// eslint-disable-next-line react/prop-types
export default function Search({ navigation }) {
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  // const newUrl = `${URL}/${searchTerm}`


  const handleSearch = () => {
    // need loader
    return fetch(`${URL}/${searchTerm}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => navigation.navigate('Details', { search: response, name: 'Details' }))
      .catch((error) => console.error('Error:', error))
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        clearTextOnFocus
        onSubmitEditing={Keyboard.dismiss}
        placeholder='Search'
        onChangeText={setSearchTerm}
        value={searchTerm}
      >
      </TextInput>

      <Pressable
        // eslint-disable-next-line react/prop-types
        onPress={() => handleSearch()}
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
