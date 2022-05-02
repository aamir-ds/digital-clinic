import { StyleSheet,StatusBar } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyDoctorsList from '../components/MyDoctorsList';
import DoctorsList from '../components/DoctorsList';
import colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();


const AllDoctors = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white}/>
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
    </SafeAreaView>

  )
}

export default AllDoctors

const styles = StyleSheet.create({})