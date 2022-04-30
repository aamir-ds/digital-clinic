import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"

import React from 'react'
import Home from '../screens/Home'
import AllDoctors from '../screens/AllDoctors'
import Clinics from '../screens/Clinics'
import Appointments from '../screens/Appointments'
import colors from '../config/colors'
import Links from '../screens/Links'
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Entypo style={{ marginRight: 20 }} size={25} color={colors.greyFont} name={'calendar'} />
                            <MaterialCommunityIcons style={{ marginRight: 15 }} size={25} color={colors.greyFont} name={'bell-outline'} />
                        </View>
                    ),
                }}
                name="Appointments"
                component={Appointments}
            />
            <Tab.Screen
                name="Links"
                component={Links}
            />
        </Tab.Navigator >
    )
}

export default Tabs

const styles = StyleSheet.create({})