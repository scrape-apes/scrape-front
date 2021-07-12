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
        data={searchData}
        renderItem={({ item }) => {
          return (
            <Pressable
              onLongPress={() => Linking.openURL(item.link)}>
              <View style={styles.list}>
                <Image source={{ uri: item.image }} style={styles.tinyLogo} />
                <View style={styles.item}>
                  <Text style={styles.item}>{item.title}</Text>
                  <Text style={styles.item}>{item.price}</Text>
                </View>
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
    width: 150,
    height: 150,
  },
  list: {
    flex: 1,
    margin: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1,
    width: 300
  },
  item: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: 150
  }
});
