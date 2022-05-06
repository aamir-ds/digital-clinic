import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import 'react-native-reanimated'
import StackNavigation from './navigation/StackNavigation';
// import { MotiView } from 'moti'
import SplashScreen from 'react-native-splash-screen'



// const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

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