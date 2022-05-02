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
import Feather from 'react-native-vector-icons/Feather';
import Octi from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Tab = createBottomTabNavigator()


const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                // tabBarLabelPosition: "beside-icon",
                // tabBarIconStyle: {
                //     display: "none"
                // }
                tabBarLabelStyle: {
                    display: 'none'
                }
            }}
        >
            <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 22,
                    },
                    tabBarLabel: 'Home',
                    tabBarIcon: () => (
                        <Octi name="home" color={colors.primary} size={20} />
                    ),
                }}
                name="Home Page"
                component={Home}
            />
            <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: colors.white,
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 22,
                    },
                    tabBarLabel: 'Message',
                    tabBarIcon: () => (
                        <AntDesign name="message1" color={colors.primary} size={20} />
                    ),
                }}
                name="Message"
                component={Home}
            />
            <Tab.Screen
                name="All Doctors"
                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Feather style={{ marginRight: 10, marginLeft: 10 }} size={20} color={colors.greyFont} name={'search'} />
                            <Octi style={{ marginRight: 20, marginLeft: 10 }} size={20} color={colors.greyFont} name={'location'} />
                        </View>
                    ),
                    tabBarLabel: 'Message',
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="doctor" color={colors.primary} size={25} />
                    ),
                }}
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
                    tabBarLabel: 'Appointments',
                    tabBarIcon: () => (
                        <Entypo name="calendar" color={colors.primary} size={20} />
                    ),
                }}
                name="Appointments"
                component={Appointments}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Links',
                    tabBarIcon: () => (
                        <Octi name="person" color={colors.primary} size={20} />
                    ),
                }}
                name="Links"
                component={Links}
            />
        </Tab.Navigator >
    )
}

export default Tabs

const styles = StyleSheet.create({})