import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, ScrollView, useWindowDimensions } from 'react-native'
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
import { useNavigation } from '@react-navigation/native';

const PaymentProcess = () => {
    const window = useWindowDimensions();
    const navigation = useNavigation()

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
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
                <View style={{ flex: 1 }}>
                    <View style={styles.headerContainer}>
                        <View style={styles.outerContainer}>
                            <View style={styles.innerContainer}>
                                <View style={styles.row}>
                                    <View style={styles.productPrice}>
                                        <View style={styles.priceTag}>
                                            <MatIco name='tag-outline' size={30} color={colors.primary} />
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
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
                                            <Text style={[styles.label, { lineHeight: 20 }]}>Date</Text>
                                            <Text style={styles.dateTime}>17 May 2020</Text>
                                        </View>
                                        <View style={styles.alignCenter}>
                                            <Text style={[styles.label, { lineHeight: 20 }]}>Time</Text>
                                            <Text style={styles.dateTime}>17:00</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.paymentSection}>
                    {/* <View style={styles.paymentContainer}> */}
                    <Text style={styles.heading}>Payment Method</Text>
                    <View style={styles.cardList}>
                        <TouchableOpacity style={[styles.card, styles.selectedCard]} activeOpacity={0.7}>
                            <View style={styles.tickIco}>
                                <MatIco name='check-circle-outline' size={20} color={colors.primary} />
                            </View>
                            <View style={styles.content}>
                                <Text style={[styles.cardName, { color: colors.primary }]}>Visa</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                            <View style={styles.content}>
                                <Text style={styles.cardName}>MasterCard</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                            <View style={styles.content}>
                                <Text style={styles.cardName}>Paypal</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                            <View style={styles.content}>
                                <Text style={styles.cardName}>Pay</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* </View> */}
                </View>
               
                <View style={styles.formSection}>
                    <Text style={{color: '#000'}}>Form</Text>
                </View>

                <View style={styles.footerSection}>
                    <ButtonComponent title={"Confirm"} onPress={() => {navigation.navigate('PaymentCardDetails')}}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default PaymentProcess;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: window.height
    },
    headerContainer: {
        flex: 1,
    },
    outerContainer: {
        backgroundColor: colors.primary,
        height: '80%',
    },
    innerContainer: {
        width: '90%',
        paddingVertical: 25,
        top: 30,
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
    flexWrap: {
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
        marginTop: 40,
        padding: 20,
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
        height: 230,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'stretch',
    },
    card: {
        backgroundColor: colors.white,
        color: colors.primary,
        width: '47%',
        height: 90,
        borderRadius: 5,
        elevation: 2.5,
        padding: 10
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardName: {
        //   color: colors.primary,
        color: colors.greyFont,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Open Sans'
    },
    footerSection: {
        flex: 1,
        //   height: 100,
        padding: 15
    },
    button: {
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        color: colors.white,
        fontSize: 17,
        fontWeight: 'bold'
    },
    tickIco: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    selectedCard: {
        borderColor: colors.primary,
        borderWidth: 1,
        backgroundColor: colors.lightPrimary
    },
    formSection: {
        flex: 1
    }
})