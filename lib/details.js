import React from 'react';
import {  FlatList, Text, View, 
          StyleSheet, SafeAreaView, 
          StatusBar, Image, Linking, Pressable } from 'react-native';

export default function Details({ route }) {
  //response transferred over from search component
  const renderItem = ({ item }) => (
    <Item title={item.title} />
    
  );
    console.log(renderItem);
  const searchData = route.params.search;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={searchData}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => Linking.openURL(item.link)}>
              <View>
                <Image source={{ uri: item.image }} style={styles.tinyLogo} />
                <Text>{item.title}</Text>
                <Text>{item.price}</Text>
              </View>
            </Pressable>
          )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  list: {
    flex: 1,
    // margin: 4
  }
});
