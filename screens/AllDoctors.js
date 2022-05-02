import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyDoctorsList from '../components/MyDoctorsList';
import DoctorsList from '../components/DoctorsList';
import colors from '../config/colors';
import { color } from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator();


const AllDoctors = () => {
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
        tabBarLabel: 'All Doctors',
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