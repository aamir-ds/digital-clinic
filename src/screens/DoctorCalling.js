import { StyleSheet, Text, View, Image, StatusBar, Pressable } from 'react-native'
import React, {useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ion from 'react-native-vector-icons/Ionicons';
import dings from '../assets/ringtones/android_one.mp3';

var Sound = require('react-native-sound');

Sound.setCategory('Playback');

var ding = new Sound(dings, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // if loaded successfully
      console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());
    
    });


const DoctorCalling = ({ navigation }) => {

    const playPause = () => {
      ding.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    };

    useEffect(() => {
        ding.setVolume(1);
        playPause()
        return () => {
            // ding.release();
        };

      }, []);

    function stopCall() {
        ding.stop()
        navigation.goBack()
    }

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
                    <Pressable  activeOpacity={0.8} onPress={stopCall} style={styles.actionBtns} >
                    {/* onPress={stopCall} */}
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