import React from 'react';
import { StyleSheet, View, Image, Text, Animated, TouchableWithoutFeedback, Pressable } from 'react-native';

import AntIcon from "react-native-vector-icons/AntDesign";
import { handlePressStyle } from './utils/styles';

import { useNavigation } from '@react-navigation/native';

export default function Button({navigation}) {
  // const navigation = useNavigation(); 
  console.log(navigation);
  return (
    <View style={[styles.container]}>
      <Pressable onPress={() => navigation.navigate('Bot')}>
        <Animated.View style={[styles.button, styles.menu]}>
          <AntIcon name="aliwangwang" color="lightblue" size={35} />
        </Animated.View>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
    right: '5%',
    bottom: '5%'
  },
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 15,
    shadowColor: '#f02a4b',
    shadowOpacity: 0.9,
    shadowOffset: { height: 0 }
  },
  menu: {
    backgroundColor: '#f02a4b'
  }
})
