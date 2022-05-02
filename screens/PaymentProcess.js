import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, Button, ScrollView, useWindowDimensions } from 'react-native'
import React, {useLayoutEffect} from 'react'
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

const PaymentProcess = ({ navigation }) => {
    const window = useWindowDimensions();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => alert('Left Menu Clicked')}
          style={{marginRight: 20, alignItems: 'center'}}>
            <Feather name='arrow-left' size={20} color={colors.white}/>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => alert('Right Menu Clicked')}
          style={{ marginLeft: 10 }}>
            <Ion name='close' size={20} color={colors.white}/>
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
    <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
        <View style={styles.headerContainer}>
            <View style={styles.outerContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.row}>
                        <View style={styles.productPrice}>
                            <View style={styles.priceTag}>
                                <MatIco name='tag-outline' size={30} color={colors.primary}/>
                            </View>
                            <View style={{marginLeft: 10}}>
                                <Text style={styles.price}>$100</Text>
                                <Text style={styles.label}>Total Payment</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.treatments}>
                        <View style={styles.list}>
                            <Text style={styles.treatmentType}>Consultation</Text>
                            <Text style={styles.value}>$30</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.treatmentType}>Other Manipulation</Text>
                            <Text style={styles.value}>$35</Text>
                        </View>
                        <View style={styles.list}>
                            <Text style={styles.treatmentType}>Other Manipulation</Text>
                            <Text style={styles.value}>$35</Text>
                        </View>
                    </View>
                    <View style={styles.flexWrap}>
                        <View style={styles.treatmentDay}>
                            <View style={[styles.alignCenter, styles.borderRight]}>
                                <Text style={[styles.label, {lineHeight: 20}]}>Date</Text>
                                <Text style={styles.dateTime}>17 May 2020</Text>
                            </View>
                            <View style={styles.alignCenter}>
                                <Text style={[styles.label, {lineHeight: 20}]}>Time</Text>
                                <Text style={styles.dateTime}>17:00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>

        <View style={styles.paymentSection}>
            <View style={styles.paymentContainer}>
                <Text style={styles.heading}>Payment Method</Text>
                <View style={styles.cardList}>
                    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                        <Text style={styles.cardName}>Visa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                        <Text style={styles.cardName}>MasterCard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                        <Text style={styles.cardName}>Paypal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                        <Text style={styles.cardName}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default PaymentProcess;

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        flex: 1,
        // borderWidth: 1,
    },
    outerContainer:{
          backgroundColor: '#6574CF',
          height: 300,
          position: 'relative',
        //   borderWidth: 1,
        //   borderColor: 'red',
      },
      innerContainer: {
        // flex: 1,
        width: '90%',
        paddingVertical: 25,
        top: 20,
        // height: 30,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
    },
    row: {
        alignSelf: 'flex-start',
          paddingHorizontal: 25,
      },
      priceTag: {
          width: 60,
          height: 60,
          backgroundColor: colors.lightPrimary,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5
      },
      productPrice: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
      },
      price: {
          fontSize: 22,
          color: colors.darkGrey,
          fontWeight: 'bold'
      },
      label: {
          color: colors.greyFont,
          fontSize: 14
      },
      list: {
          padding: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          borderBottomColor: "#eee",
          borderBottomWidth: 1
      },
      treatmentType: {
        color: colors.greyFont,
        fontSize: 16,
        fontWeight: 'bold'
      },
      value: {
          color: colors.primary,
          fontSize: 16,
        fontWeight: 'bold'
      },
      treatments: {
          paddingHorizontal: 10,
          width: '100%'
      },
      flexWrap:{
          flex: 1,
      },
      treatmentDay: {
          flexDirection: 'row',
          marginTop: 20
      },
      dateTime: {
          lineHeight: 40,
          color: colors.darkGrey,
          fontSize: 16
      },
      alignCenter: {
          alignItems: 'center',
          flex: 1,
      },
      borderRight: {
          borderRightWidth: 1,
          borderRightColor: "#eee"
      },
      paymentSection: {
          flex: 1,
          marginTop: 50,
        //   borderWidth: 1
      }, 
      heading: {
          color: colors.darkGrey,
          fontSize: 16,
          fontWeight: 'bold'
      },
      paymentContainer: {
          padding: 20,
          flex: 1, 
        },
        cardList: {
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
        //   borderWidth: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'stretch',
        },
        card: {
            backgroundColor: colors.white,
          color: colors.primary,
          width: '47%',
          height: 120,
          borderRadius: 5,
          elevation: 10,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
      },
      cardName:{ 
        //   color: colors.primary,
          color: colors.greyFont,
          fontSize: 20,
          fontWeight: 'bold'
      }
})