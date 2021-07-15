import React, { useState } from 'react';
import { View, Text, SafeAreaView, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Msg from './msg.js';
import {data} from './data.js';

let chats = [];

function bot() {
  const [msg, setMsg] = useState('');
  const [chatList, setChatList]= useState([]);

  const getAnswer = q => {
    for (let i = 0; i < data.length; i++) {
      if(data[i].question.includes(q.toLowerCase())){
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
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
