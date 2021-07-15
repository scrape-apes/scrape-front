import React, { useEffect, useState } from 'react';
import {
  FlatList, Text, View,
  StyleSheet, SafeAreaView,
  StatusBar, Image, Linking,
  Pressable
} from 'react-native';
import { handlePressStyle } from './utils/styles.js';


const URL = 'https://project-scrape.herokuapp.com/api/v1/results';

export default function Details({ route }) {
  //response transferred over from search component
  const [userSearches, setUserSearches] = useState([])
  const searchData = route.params.search;


  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${URL}/${route.params.userId}/`, {
          method: 'GET'
        });
        const response_1 = await response.json();
        return setUserSearches(response_1.results);
      } catch (err) {
        console.log(err)
      }
    })()

  }, [1])

  handlePress = async () => {
    try {
      const results = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: route.params.userId, results: searchData })
      });
      const results_1 = await results.json();
      console.log('results', results_1);
    } catch (err) {
      console.log(err);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          onPress={() => handlePress()}
          style={({ pressed }) => handlePressStyle(pressed)}>
          <Text style={{ color: 'white' }}> Save Search </Text>
        </Pressable>
      </View>
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
