import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyDoctorsList from '../components/MyDoctorsList';
import DoctorsList from '../components/DoctorsList';
import UpcomingAppointments from '../components/UpcomingAppointments';
import PastAppointments from '../components/PastAppointments';

const Tab = createMaterialTopTabNavigator();


const Appointments = ({ navigation }) => {
  return (
    <Tab.Navigator
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