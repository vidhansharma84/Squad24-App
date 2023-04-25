import React from 'react'
import AppNavigator from './src/AppNavigator'
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNavigator />
    </View>
  );
};

export default App