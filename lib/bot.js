import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Msg from './msg.js';
import {data} from './data.js';
import * as Location from 'expo-location';

const URL = 'https://project-scrape.herokuapp.com/api/v1/results';

let chats = [];

function bot({ navigation }) {
  const [msg, setMsg] = useState('');
  const [chatList, setChatList]= useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location1 = await Location.getCurrentPositionAsync({});
      const location = await Location.reverseGeocodeAsync({ latitude: Number(location1.coords.latitude), longitude: Number(location1.coords.longitude) });
      setLocation(location);
    })();
  }, []);

  // let location = 'Portland'

  const handleSearch = (searchTerm) => {
    setIsLoading(true)
    console.log(location);
    return fetch(`${URL}/${searchTerm}/${location[0].city !== 'Irvine' ? location[0].city : 'Orange County'}`, {
      method: 'GET'
    })
      .then(response => response.json())
      // redirects to the Details component, passes the response as a prop so it is accessible in that component
      .then(response => navigation.navigate('Details', { search: response, name: 'Details' }))
      .then(() => setIsLoading(false))
      .catch((error) => console.error('Error:', error));
  };

  const getAnswer = q => {
    for (let i = 0; i < data.length; i++) {
      if(data[i].question.includes(q.toLowerCase())){
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
      }
      if (data[i].question.toLowerCase() === 'i need a couch') {
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        
        
        return handleSearch('couch');
      }
      else if (data[i].question.toLowerCase() === 'i need a microwave') {
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        
        return handleSearch('microwave');
      }
    }
    chats = [...chats, {msg: "Sorry, I didn't understand. Can you try again?", incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
  };

  const onSendMsg = () => {
    chats = [...chats, {msg: msg, sentMsg: true}];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg)
    }, 1000)

    setMsg('');
  }
  return (
    <SafeAreaView>
      <FlatList 
        style={{height: '87%', bottom: '3%'}}
        data={chatList}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <Msg incomingMsg={item.incomingMsg} msg={item.msg} sentMsg={item.sentMsg}/>
        )}
      />

      <View style={styles.typeMsgContainer}>
          <TextInput style={styles.typeMsgBox}
            placeholder="Type here . . ."
            onChangeText={val => setMsg
            (val)}
            />

          <TouchableOpacity 
            style={[styles.sendBtn, {backgroundColor: msg ? '#147efb' : 'gray'}]}
            disabled={msg ? false : true}
            onPress={() => onSendMsg()}
          >
            <Text style={styles.sendTxt}>Send</Text>
          </TouchableOpacity>
      </View>
        
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  typeMsgContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    bottom: 5
  },
  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

  },

  sendBtn: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sendTxt: {
    color: 'white'
  }
})

export default bot;
