import React, { useState } from 'react';
import { Text, TextInput, Pressable, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles.js';

const URL = 'https://project-scrape.herokuapp.com/api/v1/results'

// eslint-disable-next-line react/prop-types
export default function Search({ navigation }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Move to utils file, import back into project
  // Known problem where request fails using iOS development, works using webpage
  const handleSearch = () => {
    // need loader
    return fetch(`${URL}/${searchTerm}`, {
      method: 'GET'
    })
      .then(response => response.json())
      // redirects to the Details component, passes the response as a prop so it is accessible in that component
      .then(response => navigation.navigate('Details', { search: response, name: 'Details' }))
      .catch((error) => console.error('Error:', error))
  }

  return (
    // Restricts view to the confinds of the device eg. not putting content above the notch of the iPhone
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        {/* Standard text input, default behavior is to bring up keyboard, however, it does not during development in xcode */}
        <TextInput
          style={styles.input}
          // Removes keyboard on return 
          onSubmitEditing={Keyboard.dismiss}
          placeholder='Search'
          onChangeText={setSearchTerm}
          value={searchTerm}
        >
        </TextInput>
        {/* Alternative to button, allows for different attributes eg. Long presses vs short presses */}
        <Pressable
          // eslint-disable-next-line react/prop-types
          onPress={() => handleSearch()}
          style={({ pressed }) => {
            return [
              {
                // changes background color when button is pressed
                backgroundColor: pressed
                  ? '#1669C2'
                  : '#007AFF'
              },
              // default styles of the pressable
              styles.button,
            ];
          }}>
          <Text style={{ color: 'white' }}> GO! </Text>
        </Pressable>

      </SafeAreaView>
    </DismissKeyboard>
  );
}

// Creates an invisible, touchable element that gives no feeback to trigger a Keyboard.dismiss() when inside of a text input and want to escape by touching outside the boundaries of the input
// Move to utils file and import back into this component
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>

