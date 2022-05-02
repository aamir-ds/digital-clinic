import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyDoctorsList from '../components/MyDoctorsList';
import DoctorsList from '../components/DoctorsList';
import UpcomingAppointments from '../components/UpcomingAppointments';
import PastAppointments from '../components/PastAppointments';
import colors from '../config/colors';

const Tab = createMaterialTopTabNavigator();


const Appointments = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: "transparent",

        tabBarPressOpacity: 1,
        tabBarIndicatorStyle: {
          backgroundColor: "#6574cf",
          height: 4
        },
        tabBarStyle: {
          backgroundColor: "white",
          elevation: 0
        }
      }}
    >
      <Tab.Screen options={{
        tabBarLabel: 'Upcoming',
      }
      } name="UpcomingAppointments" component={UpcomingAppointments} />
      <Tab.Screen
        options={{
          tabBarLabel: 'Past'
        }}
        name="PastAppointments" component={PastAppointments} />
    </Tab.Navigator>
  )
}

export default Appointments

const styles = StyleSheet.create({})