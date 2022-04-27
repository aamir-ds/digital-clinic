import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AllDoctors from './screens/AllDoctors';
import BookingSuccessful from './screens/BookingSuccessful';
import Appointments from './screens/Appointments';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BookingSuccessful">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AllDoctors" component={AllDoctors} />
        <Stack.Screen name="BookingSuccessful" component={BookingSuccessful} />
        <Stack.Screen name="Appointments" component={Appointments} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})