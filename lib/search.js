/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {
  Text, TextInput, Pressable,
  SafeAreaView, Keyboard,
  TouchableWithoutFeedback,
  View, ActivityIndicator,
  StyleSheet
} from 'react-native';
import { styles, handlePressStyle } from './utils/styles.js';
import * as Location from 'expo-location';
const URL = 'https://project-scrape.herokuapp.com/api/v1/results';
// const URL = 'http://localhost:7890/api/v1/results'

// eslint-disable-next-line react/prop-types
export default function Search({ navigation }, props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location1 = await Location.getCurrentPositionAsync({});
      const location = await Location.reverseGeocodeAsync({ latitude: Number(location1.coords.latitude), longitude: Number(location1.coords.longitude) });
      setLocation(location);
    })();
  }, []);

  // Move to utils file, import back into project
  // Known problem where request fails using iOS development, works using webpage
  const handleSearch = () => {
    setIsLoading(true)

    return fetch(`${URL}/${searchTerm}/${location[0].city}`, {
      method: 'GET'
    })
      .then(response => response.json())
      // redirects to the Details component, passes the response as a prop so it is accessible in that component
      .then(response => navigation.navigate('Details', { search: response, name: 'Details' }))
      .then(() => setIsLoading(false))
      .catch((error) => console.error('Error:', error));
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <ActivityIndicator size='large' color='0000ff' />
      </View>
    )
  }

  return (
    // Restricts view to the confines of the device eg. not putting content above the notch of the iPhone
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        {/* Standard text input, default behavior is to bring up keyboard, however, it does not during development in xcode */}
        <TextInput
          style={styles.input}
          // Removes keyboard on return 
          onSubmitEditing={Keyboard.dismiss}
          placeholder="Search"
          onChangeText={setSearchTerm}
          value={searchTerm}
        >
        </TextInput>
        {/* Alternative to button, allows for different attributes eg. Long presses vs short presses */}
        {/* <Button handleSearch={handleSearch} /> */}
        <Pressable
          // eslint-disable-next-line react/prop-types

          onPress={() => handleSearch()}

          style={({ pressed }) => handlePressStyle(pressed)}>

          <Text style={{ color: 'white' }}> GO! </Text>
        </Pressable>

      </SafeAreaView>
    </DismissKeyboard >
  );
}

// Creates an invisible, touchable element that gives no feedback to trigger a Keyboard.dismiss() when inside of a text input and want to escape by touching outside the boundaries of the input
// Move to utils file and import back into this component
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
