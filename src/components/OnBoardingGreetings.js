import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import colors from '../config/colors';


export default function OnBoardingGreetings(props) {

    function handleChange(val) {
        props.onChange(val)
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.content}>
                <View style={styles.logo}>
                    <Image source={require('../assets/images/blue_logo.png')} style={{ width: 80, height: 80 }} />
                </View>
                <View style={styles.greetings}>
                    <Text style={{ fontSize: 30, textAlign: 'center', fontWeight: 'bold', color: colors.white, lineHeight: 40 }}>Welcome!</Text>
                    <Text style={{ fontSize: 14, textAlign: 'center', color: colors.white, lineHeight: 26 }}>We want to know someone personal info about you to provide you with more personalised data</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => { handleChange(true) }}>
                <Text style={styles.buttonText}>Let's Go {props.onBoardingStarted}</Text>
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
        // borderWidth:1,
        paddingTop: 10
        // marginBottom: 500
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
})