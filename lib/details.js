import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Keyboard } from 'react-native';

export default function Details({ route }) {
  //response transferred over from search
  console.log(route.params.search)
  return (
    <View>
      <Text> Details Page </Text>
    </View>
  )
}