import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, Button, ScrollView, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';
import Feather from 'react-native-vector-icons/Feather';
import OnBoardingGreetings from '../components/OnBoardingGreetings';
import OnBoardingQuestionaire from '../components/OnBoardingQuestionaire';

export default function OnBoarding({ navigation }) {

    const [onBoardingStarted, setValue] = React.useState(false);

    function handleOnBoardingState(val) {
        setValue(val)
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
            <View style={styles.container}>
                <View style={styles.head}>
                    <TouchableOpacity>
                        <Feather name='arrow-left' size={20} color={colors.white} />
                    </TouchableOpacity>
                    <Text style={{ color: colors.white, fontSize: 12 }}>Skip</Text>
                </View>
                {
                    onBoardingStarted ?
                        <OnBoardingQuestionaire /> :
                        <OnBoardingGreetings onBoardingStarted={onBoardingStarted} onChange={handleOnBoardingState} />
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 15
    },
    head: {
        // flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between'
    },



})