import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AllDoctors from './screens/AllDoctors';
import BookingSuccessful from './screens/BookingSuccessful';
import Appointments from './screens/Appointments';
import Clinics from './screens/Clinics';
import colors from './config/colors';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Clinics">

        <Stack.Screen 
        options={{
           headerShown: false
        }} 
        name="Home" component={Home} />

        <Stack.Screen 
          options={{
            headerShown: false
          }} 
        name="AllDoctors" component={AllDoctors} />

        <Stack.Screen 
            options={{
              headerShown: false
          }}
        name="BookingSuccessful" 
        component={BookingSuccessful} />

        <Stack.Screen
          options={{
              headerShown: false
          }}
        name="Appointments" component={Appointments} />

        <Stack.Screen 
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 18
          },
        }}
        name="Clinics" component={Clinics} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})