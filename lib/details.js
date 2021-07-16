import React, { useEffect, useState } from 'react';
import {
  FlatList, Text, View,
  StyleSheet, SafeAreaView,
  StatusBar, Image, Linking,
  Pressable
} from 'react-native';
import { handlePressStyle } from './utils/styles.js';

const URL = 'https://project-scrape.herokuapp.com/api/v1/results';

export default function Details({ navigation, userId, route }) {
  //response transferred over from search component
  const [userSearches, setUserSearches] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${URL}/${userId}/`, {
          method: 'GET'
        });
        const response_1 = await response.json();
        // return setUserSearches(response_1.results);
      } catch (err) {
        console.log(err)
      }
    })()
  }, [1])

  if (!route.params) {
    return (
      <View>
        <Text> No Active Searches </Text>
      </View>
    )
  }

  const searchData = route.params.search;



  handlePress = async () => {

    try {
      const results = await fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, results: searchData })
      });
      const results_1 = await results.json();

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable
          onPress={handlePress}
          style={({ pressed }) => handlePressStyle(pressed)}>
          <Text style={{ color: 'white' }}> Save Search </Text>
        </Pressable>
      </View>
      <FlatList
        data={searchData}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => Linking.openURL(item.link)}>
              <View style={styles.item}>
                <Image source={{ uri: item.image }} style={styles.tinyLogo} />
                <View style={styles.itemInfo}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.price}>{item.price}</Text>
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

  },
  text: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '600',
    margin: 20,
  },
  tinyLogo: {
    width: 200,
    height: '100%',
    alignSelf: 'center',
  },
  list: {
    paddingLeft: '2%',
    paddingRight: '2%',
    width: '100%',
    alignSelf: 'center'


  },
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 230,
    width: '100%',
    backgroundColor: '#f2f3f4',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 3,

  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 20,
    fontWeight: "700",
    fontSize: 15
  },
  price: {
    color: 'green',
    fontSize: 15,
    marginLeft: 20,
  }
});
