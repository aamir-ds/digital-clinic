import { Button, StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UpcomingAppointments from '../components/UpcomingAppointments';
import PastAppointments from '../components/PastAppointments';
import colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();


const Appointments = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
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
    </SafeAreaView>
  )
}

export default Appointments

const styles = StyleSheet.create({})