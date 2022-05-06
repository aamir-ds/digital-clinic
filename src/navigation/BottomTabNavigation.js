import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const BottomTabs = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    // <BottomTabs.Navigator
    //   initialRouteName={Home}
    //   screenOptions={({route, color}) => ({
    //     header: () => {
    //       return <Text>Home Page</Text>;
    //     },
    //     tabBarIcon: ({focused}) => {
    //       let routeName = route.name;
    //       let size = 18;
    //       focused ? (color = "#fff") : (color = "#e342d3");
    //       if (routeName === 'Home') {
    //         return <Icon name="home" size={size} color={color} />;
    //       } else if (routeName === 'Profile') {
    //         return <Icon name="user" size={size} color={color} />;
    //       }
    //     },
    //     tabBarShowLabel: false,
    //   })}>
    //        <BottomTabs.Screen name="Home" component={Home} />
    //   {/* <BottomTabs.Screen name="Profile" component={ProfileScreen} /> */}
    // </BottomTabs.Navigator>
    <Text>BottomTabNavigation</Text>
  )
}

const styles = StyleSheet.create({})