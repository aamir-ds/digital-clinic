import React, {useLayoutEffect} from 'react'
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, Button, ScrollView, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors'


const DoctorProfile = ({navigation}) => {
  const window = useWindowDimensions();

    useLayoutEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => alert('Left Menu Clicked')}
              style={{marginRight: 10}}>
                {/* <Icon name="home" size={20}/> */}
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
          headerTintColor: colors.white,
        });
      }, [navigation]);
  return (
      <ScrollView>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6574CF" />

          <View style={styles.profileSection}>
              <View style={styles.actionLinks}>
                  <Text style={styles.videoLink}>Video Visit</Text>
                  <TouchableOpacity>
                      <Text style={styles.videoLink}>Chat</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.profilePic}>
                  <Image style={styles.image} source={require('../assets/images/doctorProfile.jpg')}/>
                  <Text style={styles.fullName}>Dr. Kenjo Assou</Text>
                  <Text style={styles.designation}>Opthalmologist</Text>
                  <View style={styles.drScore}>
                    <Text style={styles.ratings}>4.7</Text>
                    <Text style={styles.reviews}>(12 reviews)</Text>
                  </View>
              </View>
              <View style={styles.flexItems}>
                <View style={[styles.item, {borderRightWidth: 1, borderRightColor: '#eee'}]}>
                  <Text style={styles.itemName}>Newyork</Text>
                  <Text style={styles.itemDesc}>Location</Text>
                </View>
                <View style={styles.item}>
                  <Text style={styles.itemName}>20 Years</Text>
                  <Text style={styles.itemDesc}>Experience</Text>
                </View>
              </View>
              <View style={styles.getTimingsBtn}>
                <TouchableOpacity style={styles.bookingBtn} activeOpacity={0.8}>
                  <Text style={styles.btnText}>Available Timings</Text>
                </TouchableOpacity>
              </View>
          </View>
          <View style={styles.menuSection}>

              <View style={styles.listCard}>
              <Text style={styles.menuTitle}>Valid Insurance</Text>
              </View>
              <View style={styles.listCard}>
              <Text style={styles.menuTitle}>Experience & Qualification</Text>
              </View>
              <View style={styles.listCard}>
              <Text style={styles.menuTitle}>Personal Information</Text>
              </View>
              <View style={styles.listCard}>
              <Text style={styles.menuTitle}>Reviews</Text>
              </View>
              <View style={styles.listCard}>
              <Text style={styles.menuTitle}>Working Address</Text>
              </View>
          </View>
    </SafeAreaView>
            </ScrollView>
  )
}

export default DoctorProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: window.height,
    },
    profileSection: {
        backgroundColor: colors.white,
        padding: 15,
        flex: 3.5
    },
    actionLinks: {
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
        marginTop: 5,
    },
    image: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        width: 125,
        height: 125
    },
    fullName: {
      marginTop: 15,
      color: colors.black,
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 30
    },
    designation: {
      color: '#afafaf',
      fontSize: 16,
      lineHeight: 25
    },
    drScore: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    ratings: {
      color: colors.primary,
      fontSize: 20,
      fontWeight: 'bold'
    },
    reviews: {
      color: '#afafaf',
      fontSize: 14,
      marginLeft: 10
    },
    flexItems: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      borderBottomColor: '#eee',
      borderBottomWidth: 1,
    },
    item: {
      flex: 1,
      alignItems:'center',
      paddingVertical: 10,
    },
    itemName: {
      color: colors.black,
      fontSize: 14
    },
    itemDesc: {
      fontSize: 14,
      color: '#afafaf'
    },
    getTimingsBtn: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    bookingBtn: {
      backgroundColor: colors.primary,
      paddingVertical: 15,
      paddingHorizontal: 35,
      borderRadius: 5,
      marginVertical: 5
    },
    btnText: {
      color: colors.white,
      fontSize: 16,
      textTransform: 'uppercase'
    },
    menuSection: {
      flex: 3,
    },
    listCard: {
      backgroundColor: colors.white,
      padding: 20,
      margin: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderRadius: 2
    },
    menuTitle: {
      color: colors.black,
      fontSize: 16,
    }
})
