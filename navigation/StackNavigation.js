import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Maps from '../screens/Maps';
import BottomTabNavigation from './BottomTabNavigation';
import AllDoctors from '../screens/AllDoctors';
import BookingSuccessful from '../screens/BookingSuccessful';
import DoctorProfile from '../screens/DoctorProfile';
import Appointments from '../screens/Appointments';
import OnBoarding from '../screens/OnBoarding';
import Clinics from '../screens/Clinics';
import colors from '../config/colors';
import Tabs from './tabs';
import DoctorCalling from '../screens/DoctorCalling';
import PaymentProcess from '../screens/PaymentProcess';
import PaymentCardDetails from '../screens/PaymentCardDetails';
import Feather from 'react-native-vector-icons/Feather';
import Octi from 'react-native-vector-icons/Octicons';
import Booking from '../screens/Booking';



const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">

      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="OnBoarding" component={OnBoarding} />
      
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Tabs" component={Tabs} />

      <Stack.Screen
        options={{
          headerShown: false,

        }}
        name="All Doctors" component={AllDoctors} />

      <Stack.Screen
        options={{
          headerShown: false,

        }}
        name="BookingSuccessful"
        component={BookingSuccessful} />

      <Stack.Screen
        options={{
          headerShown: false,

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
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <Feather style={{ marginRight: 15, marginLeft: 10 }} size={20} color={colors.white} name={'search'} />
              <Octi style={{ marginRight: 5, marginLeft: 10 }} size={20} color={colors.white} name={'location'} />
            </View>
          ),
        }}
        name="Clinics" component={Clinics} />


      <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="DoctorProfile" component={DoctorProfile} options={{ headerTitle: "Doctor's Profile" }} />
      <Stack.Screen name="DoctorCalling" component={DoctorCalling} options={{
        headerShown: false,
      }} />
      <Stack.Screen name="PaymentProcess" component={PaymentProcess} options={{ headerTitleAlign: 'center', headerTitle: 'Payment' }} />
      <Stack.Screen name="PaymentCardDetails" component={PaymentCardDetails} options={{ headerTitleAlign: 'center', headerTitle: 'Payment' }} />
      <Stack.Screen name="Maps" component={Maps} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})