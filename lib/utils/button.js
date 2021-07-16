import { Pressable, Text } from "react-native";
import React from 'react'
import { styles } from './styles.js'

export default function Button({ handleSearch }) {
  return (
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
  )
}