import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import React from 'react'
import Home from '../screens/Home'
import AllDoctors from '../screens/AllDoctors'
import Clinics from '../screens/Clinics'
import Appointments from '../screens/Appointments'
import colors from '../config/colors'
const Tab = createBottomTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelPosition: "beside-icon",
                tabBarIconStyle: {
                    display: "none"
                }
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    // tabBarIcon: ({ color, size }) => (
                    //     <MaterialCommunityIcons name="account" color={color} size={size} />
                    // ),
                }}
                name="Tab Home"
                component={Home}
            />
            <Tab.Screen
                name="All Doctors"
                component={AllDoctors}
            />

            <Tab.Screen
                name="Appointments"
                component={Appointments}
            />
        </Tab.Navigator >
    )
}

export default Tabs

const styles = StyleSheet.create({})