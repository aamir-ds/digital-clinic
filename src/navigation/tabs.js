import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, Pressable, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octi from 'react-native-vector-icons/Octicons'
import colors from '../config/colors'
import AllDoctors from '../screens/AllDoctors'
import Appointments from '../screens/Appointments'
import Home from '../screens/Home'



const Tab = createBottomTabNavigator()


const Tabs = ({ navigation }) => {

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
                name="All Doctors"

                options={{
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Pressable style={{ marginRight: 15, marginLeft: 10 }}>
                                <Feather size={20} color={colors.greyFont} name={'search'} />
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate('Map')} style={{ marginRight: 20, marginLeft: 10 }}>
                                <Octi size={20} color={colors.greyFont} name={'location'} />
                            </Pressable>
                        </View>
                    ),

                    headerStyle: {
                        elevation: 0, // remove shadow on Android
                        shadowOpacity: 0, // remove shadow on iOS
                    },

                    tabBarLabel: 'All Doctors',
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
                    headerStyle: {
                        elevation: 0, // remove shadow on Android
                        shadowOpacity: 0, // remove shadow on iOS
                    },
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