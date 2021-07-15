import React, { Fragment } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function msg({incomingMsg, sentMsg, msg}) {
  return (
    <Fragment>
      {/* incoming msg */}
      {
        incomingMsg && (<View style={styles.incomingMsgBox}>
        <Text style={styles.incomingMsgText}>{msg}</Text>
      </View>)
      }
      
      {/* Sent messages */}
      {
        sentMsg && (<View style={styles.sentMsgBox}>
        <Text style={styles.sentMsgText}>{msg}</Text>
      </View>)
      }
      
    </Fragment>
  )
}

const styles = StyleSheet.create({
  incomingMsgBox: {
    backgroundColor: 'white',
    maxWidth: '70%',
    borderRadius: 14,
    padding: 8,
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  incomingMsgText: {
    color: 'black', 
    fontSize: 16
  },
  sentMsgBox: {
    backgroundColor: '#147efb',
    maxWidth: '70%',
    borderRadius: 14,
    padding: 8,
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
  
  },
  sentMsgText: {
    color: 'white', 
    fontSize: 16
  }
})

export default msg;
