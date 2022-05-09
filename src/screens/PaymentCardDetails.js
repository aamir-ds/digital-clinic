import { StyleSheet, Text, StatusBar, View, Pressable, Image, TextInput, ScrollView, useWindowDimensions, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../config/colors'
import Ion from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../components/ButtonComponent';
import InputComponent from '../components/InputComponent';

const PaymentCardDetails = ({ navigation }) => {
  const window = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      //   headerLeft: () => (
      //     <Pressable
      //       onPress={() => alert('Left Menu Clicked')}
      //       style={{marginRight: 20, alignItems: 'center'}}>
      //         <Feather name='arrow-left' size={20} color={colors.white}/>
      //     </Pressable>
      //   ),
      headerRight: () => (
        <Pressable
          onPress={() => navigation.navigate('Booking')}
          style={{ marginLeft: 10 }}>
          <Ion name='close' size={24} color={colors.white} />
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

  const [last4Digits, setLastAccountNo] = useState('1222');
  const [accName, setAccHolderName] = useState('Lucas Pacheco');
  const [expDate, setExpDate] = useState('09/24');
  const [cvvNo, setCvvNo] = useState('123');

  function onChangeAccNo(val) {
    if (val.length == 16) {
      let splitVal = val.slice(12, 16)
      setLastAccountNo(splitVal)
    } else if (val.length == 0) {
      setLastAccountNo('1222')
    }
  }

  function onAccNameChange(val) {
    if (val == '') {
      setAccHolderName('Lucas Pacheco')
    } else {
      setAccHolderName(val)
    }
  }

  function onExpiryDateChange(val) {
    setExpDate(val)
  }

  function onCvvChange(val) {
    setCvvNo(val)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <ScrollView>

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
              <Text style={styles.number}>{last4Digits}</Text>
            </View>
            <View style={styles.cardHolder}>
              <Text style={styles.fullname}>{accName}</Text>
              <Text style={styles.fullname}>{expDate}</Text>
            </View>
          </View>
        </View>

        <View style={styles.formSection}>
          <View style={styles.formField}>
            <InputComponent label={'Card Number'} type={'number-pad'} OnChange={onChangeAccNo} maxLength={16} />
          </View>
          <View style={styles.formField}>
            <InputComponent label={'Card Holder'} type={'text'} OnChange={onAccNameChange} capitalizeOn={true} />
          </View>

          <View style={styles.flexFields}>
            <View style={[styles.formField, { flex: 2, marginRight: 20 }]}>
              <InputComponent label={'Expiry Date'} type={'hidden'} maxLength={5} OnChange={onExpiryDateChange} />
            </View>
            <View style={[styles.formField, { flex: 1 }]}>
              <InputComponent label={'CVV'} type={'number-pad'} maxLength={3} OnChange={onCvvChange} />
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
    flex: 1,
    backgroundColor: colors.white
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
    fontSize: 18,
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
    fontSize: 16,
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