import { StatusBar  } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

//screens
import Login from './screens/Login';

export default function App() {
  return (
    <Login />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
