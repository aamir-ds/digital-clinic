import { StyleSheet, Text, View, Image, StatusBar, Pressable } from 'react-native'
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ion from 'react-native-vector-icons/Ionicons';


const DoctorCalling = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#6574CF" />
            <View style={styles.wrapper}>

                <View style={styles.callerDetail}>
                    <Text style={styles.callingTxt}>Calling...</Text>
                    <Text style={styles.callerName}>Dr. Hugo Saavedra</Text>
                </View>

                <View style={styles.imageContainer}>
                    <View style={[styles.circle, styles.center]}>
                        {/* {[...Array(3).keys()].map((index)=> {
                    return (
                        <Text>{index}</Text>
                    )
                })} */}
                        {/* <MotiView from={{ opacity: 0 }} animate={{ opacity: 1 }} /> */}
                        <Image source={require('../assets/images/doctorProfile.jpg')} style={styles.profileImg} />
                    </View>
                </View>

                <View style={styles.actionWrap}>
                    <Pressable onPress={() => navigation.goBack()} activeOpacity={0.8} style={styles.actionBtns} >
                        <Ion name="close" size={35} color={Colors.red} />
                    </Pressable>
                    <Pressable activeOpacity={0.8} style={styles.actionBtns}>
                        <Feather name="phone-call" size={30} color={Colors.primary} />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DoctorCalling;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    circle: {
        width: 130,
        height: 130,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: Colors.white,
        elevation: 30,
        shadowColor: Colors.darkGrey
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
        // borderWidth: 1
    },
    callingTxt: {
        fontSize: 14
    },
    callerName: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: Colors.white,
        lineHeight: 35
    },
    callerDetail: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileImg: {
        width: 130,
        height: 130,
        borderRadius: 100,
        shadowColor: Colors.darkGrey,
    },
    actionBtns: {
        backgroundColor: Colors.white,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        elevation: 10,
        shadowColor: Colors.darkGrey,
    },
    actionWrap: {
        width: '90%',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})