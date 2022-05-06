import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, TextInput, ScrollView, useWindowDimensions, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../config/colors'
import MatIco from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIco from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Fa from 'react-native-vector-icons/FontAwesome';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const PaymentCardDetails = ({ navigation }) => {
  const window = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerLeft: () => (
      //     <TouchableOpacity
      //       onPress={() => alert('Left Menu Clicked')}
      //       style={{marginRight: 20, alignItems: 'center'}}>
      //         <Feather name='arrow-left' size={20} color={colors.white}/>
      //     </TouchableOpacity>
      //   ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('Right Menu Clicked')}
          style={{ marginLeft: 10 }}>
          <Ion name='close' size={20} color={colors.white} />
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <View style={styles.cardSection}>
        <View style={styles.content}>
          <Text style={styles.cardName}>Visa</Text>
          <View style={styles.cardNumber}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
              <View style={styles.dot}></View>
            </View>
            <Text style={styles.number}>1222</Text>
          </View>
          <View style={styles.cardHolder}>
            <Text style={styles.fullname}>Lucas Pacheco</Text>
            <Text style={styles.fullname}>09.24</Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.formSection}>
          <View style={styles.formField}>
            <InputComponent label={'Card Number'} type={'numeric'} />
          </View>
          <View style={styles.formField}>
            <InputComponent label={'Card Holder'} type={'text'} />
          </View>

          <View style={styles.flexFields}>
            <View style={[styles.formField, { flex: 2, marginRight: 20 }]}>
              <InputComponent label={'Expiry Date'} type={'numeric'} />
            </View>
            <View style={[styles.formField, { flex: 1 }]}>
              <InputComponent label={'CVV'} type={'numeric'} maxLength={40} />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <ButtonComponent title={'Pay'} route={'BookingSuccessful'} />
      </View>
    </SafeAreaView>
  )
}

export default PaymentCardDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cardSection: {
    flex: 1,
    margin: 20,
    height: 200,
    borderRadius: 5,
    borderLeftWidth: 7,
    borderLeftColor: "#B1A0FF",
    backgroundColor: "#8293FE",
  },
  cardName: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: "Open Sans",
    flex: 1,
  },
  cardNumber: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  content: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
    height: 200,
    // borderWidth: 1
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: colors.white,
    marginRight: 5,
  },
  cardHolder: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  fullname: {
    fontSize: 18,
    fontFamily: 'Open Sans',
  },
  footer: {
    padding: 20,
    // bottom: 0
  },
  formSection: {
    flex: 2,
    // borderWidth: 1,
    flexDirection: 'column',
    padding: 20
  },
  formField: {
    marginBottom: 10
  },
  flexFields: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})