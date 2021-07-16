import React, { useEffect, useState } from 'react';
import { styles, handlePressStyle } from './utils/styles.js';
import { NavigationContainer } from '@react-navigation/native';
import Search from './search.js'
import Details from './details.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FlatList, Text, View,
  StyleSheet, SafeAreaView,
  StatusBar, Image, Linking,
  Pressable
} from 'react-native';

const Tab = createBottomTabNavigator();

export default function Home({ navigation, route }) {
  handlePress = () => {
    return navigation.navigate('Auth', { name: 'Auth' })
  }
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => handlePressStyle(pressed)}>
          <Text style={{ color: 'white' }}> Log Out</Text>
        </Pressable>
      </SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Search" children={props => <Search {...props} userId={route.params.userId} />} />
        <Tab.Screen name="Details" children={props => <Details {...props} userId={route.params.userId} />} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


