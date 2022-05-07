import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import colors from '../config/colors';


export default function OnBoardingGreetings(props) {
    const navigation = useNavigation()


    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <Text style={{ fontSize: 12, color: colors.lightGrey }}>Skip</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <Image source={require('../assets/images/blue_logo.png')} style={{ width: 80, height: 80 }} />
                </View>
                <View style={styles.greetings}>
                    <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: '400', color: colors.white, lineHeight: 40 }}>Welcome!</Text>
                    <Text style={{ fontSize: 13, textAlign: 'center', color: colors.white, lineHeight: 26, marginTop: 10, color: colors.lightGrey }}>We want to know someone personal info about you to provide you with more personalised data</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => { props.onChange(false) }}>
                <Text style={styles.buttonText}>Let's Go</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '90%',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'space-around',
        // borderWidth: 1
    },
    logo: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '40%'
    },
    greetings: {
        flex: 1,

    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
})