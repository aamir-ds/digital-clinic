import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigation from './navigation/StackNavigation';


// const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})