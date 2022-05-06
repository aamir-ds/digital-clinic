import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, Button, ScrollView, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors'
import MatIco from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIco from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Fa from 'react-native-vector-icons/FontAwesome';

const DoctorProfile = ({ navigation }) => {
  const window = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: () => (
        <Text style={{ fontWeight: 'normal' }}>Doctor's Profile</Text>
      ),
      // headerLeft: () => (
      //   <TouchableOpacity
      //     onPress={() => alert('Left Menu Clicked')}
      //     style={{marginRight: 20, alignItems: 'center'}}>
      //       <Feather name='arrow-left' size={20} color={colors.white}/>
      //   </TouchableOpacity>
      // ),
      headerRight: () => (

        <TouchableOpacity onPress={() => navigation.navigate('Map')} style={{ marginRight: 10 }}>
          <Octi size={20} color={colors.white} name={'location'} />
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
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

        <View style={styles.profileSection}>
          <View style={styles.actionLinks}>
            <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center' }}
              onPress={() => navigation.navigate('DoctorCalling')}>
              <Feather name='video' size={20} color={colors.primary} />
              <Text style={styles.videoLink}>Video Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatBtn}>
              {/* <Text style={styles.videoLink}>Chat</Text> */}
              <Ion name='chatbubble-ellipses-outline' size={20} color={colors.primary} />
            </TouchableOpacity>
          </View>
          <View style={styles.profilePic}>
            <Image style={styles.image} source={require('../assets/images/doctorProfile.jpg')} />
            <Text style={styles.fullName}>Dr. Kenjo Assou</Text>
            <Text style={styles.designation}>Opthalmologist</Text>
            <View style={styles.drScore}>
              <Fa name='star' color={colors.primary} size={20} style={{ marginRight: 8 }} />
              <Text style={styles.ratings}>4.7</Text>
              <Text style={styles.reviews}>(12 reviews)</Text>
            </View>
          </View>
          <View style={styles.flexItems}>
            <View style={[styles.item, { borderRightWidth: 1, borderRightColor: '#eee' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Octi name='location' color={colors.greyFont} size={20} style={{ marginRight: 8 }} />
                <Text style={styles.itemName}>Newyork</Text>
              </View>
              <Text style={styles.itemDesc}>Location</Text>
            </View>
            <View style={styles.item}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name='zap' color={colors.greyFont} size={20} style={{ marginRight: 8 }} />
                <Text style={styles.itemName}>20 Years</Text>
              </View>
              <Text style={styles.itemDesc}>Experience</Text>
            </View>
          </View>
          <View style={styles.getTimingsBtn}>
            <TouchableOpacity onPress={() => navigation.navigate('Booking')} style={styles.bookingBtn} activeOpacity={0.8}>
              <MatIco name='calendar-week' size={20} color={colors.white} />
              <Text style={styles.btnText}>Available Timings</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.menuSection}>

          <TouchableOpacity style={styles.listCard} activeOpacity={0.6}>
            <MatIco name='briefcase' color={colors.primary} size={30} style={{ borderRightWidth: 0.5, borderRightColor: colors.greyFont, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Valid Insurance</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={40} style={{ marginRight: 8 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listCard} activeOpacity={0.6}>
            <Ion name="ribbon-outline" color={colors.primary} size={30} style={{ borderRightWidth: 0.5, borderRightColor: colors.greyFont, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Experience & Qualification</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={40} style={{ marginRight: 8 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listCard} activeOpacity={0.6}>
            <Feather name='user' color={colors.primary} size={30} style={{ borderRightWidth: 0.5, borderRightColor: colors.greyFont, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Personal Information</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={40} style={{ marginRight: 8 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listCard} activeOpacity={0.6}>
            <Fa name='star-o' color={colors.primary} size={30} style={{ borderRightWidth: 0.5, borderRightColor: colors.greyFont, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Reviews</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={40} style={{ marginRight: 8 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Map')} style={styles.listCard} activeOpacity={0.6}>
            <Octi name='location' color={colors.primary} size={30} style={{ borderRightWidth: 0.5, borderRightColor: colors.greyFont, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Working Address</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={40} style={{ marginRight: 8 }} />
            </View>
          </TouchableOpacity>
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
    fontWeight: 'bold',
    marginLeft: 10
  },
  chatBtn: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderColor: colors.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightPrimary
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
    marginTop: 15
  },
  item: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemName: {
    color: colors.black,
    fontSize: 14,
    lineHeight: 30
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
    flexDirection: 'row',
    backgroundColor: colors.primary,
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center'
  },
  btnText: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 16,
    textTransform: 'uppercase'
  },
  menuSection: {
    flex: 3,
    margin: 15
  },
  listCard: {
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
    // paddingVertical: 25,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    // height: 80,
    alignItems: 'center'
  },
  menuTitle: {
    color: colors.black,
    fontSize: 16,
  },
  listItems: {
    flex: 1,
    paddingLeft: 25
  }
})
