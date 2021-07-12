import * as SecureStore from 'expo-secure-store';
import * as React from 'react';

// saves authentication token to device
export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
  console.log('SAVING TOKEN');
}

export async function getValue(key) {
  const result = await SecureStore.getItemAsync(key);
  if (!result) {
    console.log('NO TOKEN, BITCHES');
  } else {
    console.log('TOKEN FOUND');
  }
}
