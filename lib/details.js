import React from 'react';
import { Text, View, } from 'react-native';

export default function Details({ route }) {
  //response transferred over from search component
  console.log(route.params.search)
  return (
    <View>
      <Text> Details Page </Text>
    </View>
  )
}