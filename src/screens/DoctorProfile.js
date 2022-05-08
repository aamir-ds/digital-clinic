import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, StatusBar, View, Pressable, Image, ScrollView, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors'
import MatIco from 'react-native-vector-icons/MaterialCommunityIcons';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
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
      //   <Pressable
      //     onPress={() => alert('Left Menu Clicked')}
      //     style={{marginRight: 20, alignItems: 'center'}}>
      //       <Feather name='arrow-left' size={20} color={colors.white}/>
      //   </Pressable>
      // ),
      headerRight: () => (

        <Pressable onPress={() => navigation.navigate('Map')} style={{ marginRight: 10 }}>
          <Octi size={18} color={colors.white} name={'location'} />
        </Pressable>
      ),

      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: '#6574CF', //Set Header color
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontWeight: '400',
        fontSize: 18

      },
    });
  }, [navigation]);
  return (
    <ScrollView>
      <SafeAreaView style={[styles.container]}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

        <View style={styles.profileSection}>
          <View style={styles.actionLinks}>
            <Pressable activeOpacity={0.8} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 3 }}
              onPress={() => navigation.navigate('DoctorCalling')}>
              <Feather name='video' size={18} color={colors.primary} />
              <Text style={styles.videoLink}>Video Visit</Text>
            </Pressable>
            <Pressable android_ripple={{ color: colors.primary, borderless: false, radius: 27 }} style={styles.chatBtn}>
              <Ion name='chatbubble-ellipses-outline' size={18} color={colors.primary} />
            </Pressable>
          </View>
          <View style={styles.profilePic}>
            <View style={{ position: 'relative' }}>
              <View style={{
                height: 16, width: 16,
                backgroundColor: colors.greenOutline, position: 'absolute', zIndex: 1,
                borderRadius: 50,
                bottom: 10,
                left: 96
              }} />

              <Image style={styles.image} source={require('../assets/images/doctorProfile.jpg')} />
            </View>
            <Text style={styles.fullName}>Dr. Kenjo Assou</Text>
            <Text style={styles.designation}>Opthalmologist</Text>
            <View style={styles.drScore}>
              <Fa name='star' color={colors.primary} size={18} style={{ marginRight: 8 }} />
              <Text style={styles.ratings}>4.7</Text>
              <Text style={styles.reviews}>(12 reviews)</Text>
            </View>
          </View>
          <View style={styles.flexItems}>
            <View style={[styles.item, { borderRightWidth: 1, borderRightColor: '#eee' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: 5 }}>
                <Octi name='location' color={colors.greyFont}
                  size={18} style={{ marginRight: 8, marginTop: 3 }} />
                <View >
                  <Text style={styles.itemName}>New york</Text>
                  <Text style={styles.itemDesc}>Location</Text>
                </View>
              </View>
            </View>
            <View style={styles.item}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginVertical: 5 }}>
                <Feather name='zap' color={colors.greyFont} size={18} style={{ marginRight: 8, marginTop: 3 }} />

                <View >
                  <Text style={styles.itemName}>20 Years</Text>
                  <Text style={styles.itemDesc}>Experience</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.getTimingsBtn}>
            <Pressable
              android_ripple={{ color: colors.lightPrimary, borderless: false, radius: 110 }}
              onPress={() => navigation.navigate('Booking')}
              style={styles.bookingBtn} >
              <MatIco name='calendar-week' size={20} color={colors.white} />
              <Text style={styles.btnText}>Available Timings</Text>
            </Pressable>
          </View>
        </View>


        <View style={styles.menuSection}>

          <Pressable style={styles.listCard}
            android_ripple={{ color: colors.primary, borderless: false, radius: 200 }}
          >
            <MatIco name='briefcase' color={colors.primary} size={25} style={{ borderRightWidth: 1, borderRightColor: colors.lightGrey, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Valid Insurance</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={35} style={{ marginRight: 8 }} />
            </View>
          </Pressable>

          <Pressable style={styles.listCard}
            android_ripple={{ color: colors.primary, borderless: false, radius: 200 }}
            activeOpacity={0.6}>
            <Ion name="ribbon-outline" color={colors.primary} size={25} style={{ borderRightWidth: 1, borderRightColor: colors.lightGrey, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Experience & Qualification</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={35} style={{ marginRight: 8 }} />
            </View>
          </Pressable>

          <Pressable
            android_ripple={{ color: colors.primary, borderless: false, radius: 200 }}
            style={styles.listCard} activeOpacity={0.6}>
            <Feather name='user' color={colors.primary} size={25} style={{ borderRightWidth: 1, borderRightColor: colors.lightGrey, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Personal Information</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={35} style={{ marginRight: 8 }} />
            </View>
          </Pressable>

          <Pressable
            android_ripple={{ color: colors.primary, borderless: false, radius: 200 }}
            style={styles.listCard} activeOpacity={0.6}>
            <Fa name='star-o' color={colors.primary} size={25} style={{ borderRightWidth: 1, borderRightColor: colors.lightGrey, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Reviews</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={35} style={{ marginRight: 8 }} />
            </View>
          </Pressable>

          <Pressable
            android_ripple={{ color: colors.primary, borderless: false, radius: 200 }}
            onPress={() => navigation.navigate('Map')} style={styles.listCard} activeOpacity={0.6}>
            <Octi name='location' color={colors.primary} size={25} style={{ borderRightWidth: 1, borderRightColor: colors.lightGrey, padding: 25 }} />
            <View style={styles.listItems}>
              <Text style={styles.menuTitle}>Working Address</Text>
            </View>
            <View>
              <EvilIco name='chevron-right' color={colors.greyFont} size={35} style={{ marginRight: 8 }} />
            </View>
          </Pressable>
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
    backgroundColor: colors.screenBackground
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
    fontSize: 12,
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: 10
  },
  chatBtn: {
    width: 42,
    height: 42,
    borderRadius: 4,
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
    color: colors.greyFont,
    fontSize: 13,
    lineHeight: 25
  },
  drScore: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ratings: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold'
  },
  reviews: {
    color: colors.greyFont,
    fontSize: 13,
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
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center'
  },
  btnText: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 13,
    textTransform: 'uppercase'
  },
  menuSection: {
    flex: 3,
    margin: 15
  },
  listCard: {
    backgroundColor: colors.white,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 4,
    alignItems: 'center'
  },
  menuTitle: {
    color: colors.black,
    fontSize: 15,
    fontWeight: '500'
  },
  listItems: {
    flex: 1,
    paddingLeft: 18
  }
})
