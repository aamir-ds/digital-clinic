import { SafeAreaView, StatusBar, StyleSheet, Text, View,Pressable } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../config/colors';
import TimeTab from '../components/TimeTab';
import DetailsTab from '../components/DetailsTab';
import FinishTab from '../components/FinishTab';

import Ion from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();


const Booking = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       onPress={() => alert('Left Menu Clicked')}
            //       style={{marginRight: 20, alignItems: 'center'}}>
            //         <Feather name='arrow-left' size={20} color={colors.white}/>
            //     </TouchableOpacity>
            //   ),
            headerRight: () => (
                <Pressable
                    onPress={() => navigation.navigate('Booking')}
                    style={{ marginLeft: 10 }}>
                    <Ion name='close' size={20} color={colors.white} />
                </Pressable>
            ),

            headerShadowVisible: false,
            headerStyle: {
                backgroundColor: colors.white, //Set Header color
                elevation: 0, // remove shadow on Android
                shadowOpacity: 0, // remove shadow on iOS
            },
            headerTintColor: colors.black,
        });
    }, [navigation]);

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
                        elevation: 0,
                        borderBottomColor: "#eee",
                        borderBottomWidth: 1
                    }
                }}
            >

                <Tab.Screen options={{
                    tabBarLabel: '1. Time',
                }
                } name="TimeTab" component={TimeTab} />
                <Tab.Screen
                    options={{
                        tabBarLabel: '2. Details'
                    }}
                    name="DetailsTab" component={DetailsTab} />
                <Tab.Screen
                    options={{
                        tabBarLabel: '3. Finish'
                    }}
                    name="FinishTab" component={FinishTab} />

            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default Booking

const styles = StyleSheet.create({})