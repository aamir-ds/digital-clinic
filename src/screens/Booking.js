import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';
import TimeTab from '../components/TimeTab';
import DetailsTab from '../components/DetailsTab';
import FinishTab from '../components/FinishTab';


const Tab = createMaterialTopTabNavigator();


const Booking = () => {
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
                    tabBarLabel: 'Time',
                }
                } name="TimeTab" component={TimeTab} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Details'
                    }}
                    name="DetailsTab" component={DetailsTab} />
                <Tab.Screen
                    options={{
                        tabBarLabel: 'Finish'
                    }}
                    name="FinishTab" component={FinishTab} />

            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default Booking

const styles = StyleSheet.create({})