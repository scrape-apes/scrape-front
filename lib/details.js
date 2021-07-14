import React from 'react';
import {
  FlatList, Text, View,
  StyleSheet, SafeAreaView,
  StatusBar, Image, Linking,
  Pressable
} from 'react-native';

export default function Details({ route }) {
  //response transferred over from search component
  const renderItem = ({ item }) => (
    <Item title={item.title} />

  );
  console.log(renderItem);
  const searchData = route.params.search;
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>Results</Text>
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
    paddingLeft: 60,
    paddingRight: 60,
    width: '100%',
    alignSelf: 'center'


  },
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 230,
    width: '100%',
    backgroundColor: '#f2f3f4',
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
    fontSize: 20
  },
  price: {
    color: 'green',
    fontSize: 20,
    marginLeft: 20,
  }
});
