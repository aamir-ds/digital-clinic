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
                tabBarStyle: { height: 60 },
                tabBarLabelStyle: {
                    display: 'none'
                },

            }}
        >
            <Tab.Screen
                options={{
                    headerStyle: {
                        backgroundColor: colors.primary,
                    },
                    headerTintColor: colors.white,
                    elevation: 0,
                    headerStyle: {
                        backgroundColor: '#6574CF', //Set Header color
                        elevation: 0, // remove shadow on Android
                        shadowOpacity: 0, // remove shadow on iOS
                    },
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 22,
                    },
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <Octi style={{ justifyContent: 'center' }} name="home" color={colors.primary} size={20} />

                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <Octi name="home" color={colors.primary} size={20} />

                            </View>
                        );
                    },
                    // tabBarIcon: () => (
                    //     <Octi name="home" color={colors.primary} size={20} />
                    // ),
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
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <AntDesign style={{ justifyContent: 'center' }} name="message1" color={colors.primary} size={20} />

                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <AntDesign style={{ justifyContent: 'center' }} name="message1" color={colors.primary} size={20} />

                            </View>
                        );
                    },
                    // tabBarIcon: () => (
                    //     <AntDesign style={{ justifyContent: 'center' }} name="message1" color={colors.primary} size={20} />
                    // ),
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
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <MaterialCommunityIcons style={{ justifyContent: 'center' }} name="doctor" color={colors.primary} size={25} />

                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <MaterialCommunityIcons style={{ justifyContent: 'center' }} name="doctor" color={colors.primary} size={25} />
                            </View>
                        );
                    },
                    // tabBarIcon: () => (
                    //     <MaterialCommunityIcons name="doctor" color={colors.primary} size={25} />
                    // ),
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
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <Entypo style={{ justifyContent: 'center' }} name="calendar" color={colors.primary} size={20} />

                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <Entypo style={{ justifyContent: 'center' }} name="calendar" color={colors.primary} size={20} />
                            </View>
                        );
                    },
                    // tabBarIcon: () => (
                    //     <Entypo name="calendar" color={colors.primary} size={20} />
                    // ),
                }}
                name="Appointments"
                component={Appointments}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Links',
                    tabBarIcon: ({ focused }) => {
                        return focused ? (
                            <View style={styles.labelFocusedContainer}>
                                <Octi style={{ justifyContent: 'center' }} name="person" color={colors.primary} size={20} />

                            </View>
                        ) : (
                            <View style={styles.labelContainer}>
                                <Octi style={{ justifyContent: 'center' }} name="person" color={colors.primary} size={20} />
                            </View>
                        );
                    },
                    // tabBarIcon: () => (
                    //     <Octi name="person" color={colors.primary} size={20} />
                    // ),
                }}
                name="Links"
                component={Links}
            />
        </Tab.Navigator >
    )
}

export default Tabs

const styles = StyleSheet.create({
    labelContainer: {
        alignItems: 'center',
        width: '100%',
    },
    labelFocusedContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: '100%',
        borderTopWidth: 4,
        borderTopColor: colors.primary,
    },

})