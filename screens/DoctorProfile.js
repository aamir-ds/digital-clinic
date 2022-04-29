import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import { Icon } from 'react-native-vector-icons/FontAwesome';
import colors from '../config/colors'

const DoctorProfile = ({navigation}) => {

    useLayoutEffect(() => {
        navigation.setOptions({
        //   headerTitle: props => (
        //     <Text
        //       {...props}
        //       style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
        //       Doctor's Profile
        //     </Text>
        //   ),

          headerLeft: () => (
            <TouchableOpacity
              onPress={() => alert('Left Menu Clicked')}
              style={{marginRight: 10}}>
                <Icon name="home" size={20}/>
              <Text style={{color: 'white'}}>Back</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Right Menu Clicked')}
              style={{marginLeft: 10}}>
              <Text style={{color: 'white'}}>Map View</Text>
            </TouchableOpacity>
          ),

          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#6574CF', //Set Header color
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerTintColor: '#fff',
        });
      }, [navigation]);
  return (
    <View style={styles.container}>
        <View style={styles.profileSection}>
            <View style={styles.actionLinks}>
                <Text style={styles.videoLink}>Video Visit</Text>
                <TouchableOpacity>
                    <Text style={styles.videoLink}>Chat</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profilePic}>
                <Image style={styles.image} source={require('../assets/images/doctorProfile.jpg')}/>
            </View>
        </View>
    </View>
  )
}

export default DoctorProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileSection: {
        height: '50%',
        backgroundColor: '#fff',
        padding: 15,
        // flex: 1
    },
    actionLinks: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    videoLink: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    profilePic: {
        flex: 1,
        alignItems: 'center',
        marginTop: 18
        // height: 125
    },
    image: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 125,
        height: 125
    }
})
