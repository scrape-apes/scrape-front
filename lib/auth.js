/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text, View, TextInput,
  Pressable, Keyboard,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
// importing CSS like styles object
import * as Location from 'expo-location';
import { styles, handlePressStyle } from './utils/styles.js';

const image = { uri: 'https://sendbird.com/wp-content/uploads/20180629_marketplace@2x.png' }

// eslint-disable-next-line react/prop-types
export default function Auth({ navigation }) {
  const [userLocation, setLocation] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState('');

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
        navigation.navigate('Home', {
          name: 'Home', location: userLocation, userId: response.id
        })
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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>

        <View style={styles.brand}>
          <Text style={styles.text}>Market Scrape</Text>
        </View>
        {/* Standard text input, default behavior is to bring up keyboard, however, it does not during development in xcode */}
        <View style={styles.inputArea}>
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
        </View>

        {/* Can set the style of the date, time, battery, etc. along the top border of the device */}
        <StatusBar style="auto" />

      </ImageBackground>
    </View>
  );
}

