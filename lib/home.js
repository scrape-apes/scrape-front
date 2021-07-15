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

export default function Home({ navigation }) {
  return (
    // <View>
    //   <Text> Hi </Text>
    // </View>
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={Search} navigation={navigation} />
        <Tab.Screen name="Details" component={Details} navigation={navigation} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


