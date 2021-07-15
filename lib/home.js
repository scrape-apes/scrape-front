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

export default function Home({ route, navigation }) {
  // useEffect(() => {
  //   console.log('home',arguments)
  //   console.log('home nav', navigation);
  // }, [1])
  return (
    // <View>
    //   <Text> Hi </Text>
    // </View>
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="Search" children={() => <Search userId={route.params.userId} navigation={navigation}/>}/>
        <Tab.Screen name="Details" component={Details}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}


