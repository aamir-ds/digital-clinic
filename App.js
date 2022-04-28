import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import AllDoctors from './screens/AllDoctors';
import BookingSuccessful from './screens/BookingSuccessful';
import DoctorProfile from './screens/DoctorProfile';
import Appointments from './screens/Appointments';
import Clinics from './screens/Clinics';
import colors from './config/colors';
import Tabs from './navigation/tabs';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DoctorProfile">

        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="Home" component={Tabs} />

        <Stack.Screen
          options={{
            headerShown: false
          }}
          name="All Doctors" component={AllDoctors} />

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
              fontSize: 20
            },
          }}
          name="Clinics" component={Clinics} />
        <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen name="DoctorProfile" component={DoctorProfile} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})