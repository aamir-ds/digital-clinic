import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyDoctorsList from '../components/MyDoctorsList';
import DoctorsList from '../components/DoctorsList';

const Tab = createMaterialTopTabNavigator();


const AllDoctors = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        tabBarLabel: 'All Doctors'
      }
      } name="DoctorsList" component={DoctorsList} />
      <Tab.Screen
        options={{
          tabBarLabel: 'My Doctors'
        }}
        name="MyDoctorsList" component={MyDoctorsList} />
    </Tab.Navigator>

  )
}

export default AllDoctors

const styles = StyleSheet.create({})