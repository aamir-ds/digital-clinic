import { StyleSheet, Text, StatusBar, View, Pressable, ScrollView, useWindowDimensions, FlatList } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../config/colors'
import MatIco from 'react-native-vector-icons/MaterialCommunityIcons';

import Ion from 'react-native-vector-icons/Ionicons';
import ButtonComponent from '../components/ButtonComponent';
import { useNavigation } from '@react-navigation/native';
import { paymentMethods } from '../config/dummy';

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
                <Pressable
                    onPress={() => navigation.navigate('Booking')}
                    style={{ marginLeft: 10 }}>
                    <Ion name='close' size={20} color={colors.white} />
                </Pressable>
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

    const [activeCard , setPayCardType] = useState(paymentMethods[0]);

    const selectCard = (item) => {
        if(item.checked == false){
            item.checked = true
            setPayCardType(prev => prev.checked = false);
            setPayCardType(item);
        } else {
            setPayCardType(item);
        }
        // console.log("Clicked",activeCard)
    }

    const renderItem = ({item}) => (
        <View style={{flex: 1, flexDirection: 'column', margin: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Pressable style={[styles.card, item.checked == true ? styles.selected: '' ]} activeOpacity={0.7} onPress={()=> selectCard(item)}
            android_ripple={{color: colors.lightPurple,borderless: false, radius: 95}}>
                {
                    item.checked == true ? 
                    <View style={styles.tickIco}>
                        <MatIco name='check-circle-outline' size={20} color={colors.primary} />
                    </View> :  <></>
                }
                <View style={styles.content}>
                    <Text style={styles.cardName}>{item.name}</Text>
                </View>
            </Pressable>
        </View>
    )

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
                    <Text style={styles.heading}>Payment Method</Text>
                        <View style={{marginHorizontal: 15}}>
                        <FlatList
                        data={paymentMethods}
                        renderItem={renderItem} 
                        keyExtractor={(item)=>item.id}
                        numColumns={2}
                        key={item => item.id}
                        />
                        </View>
                </View>

                <View style={styles.footerSection}>
                    <ButtonComponent title={"Confirm"} route={'PaymentCardDetails'} />
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
        marginBottom: 10
        // padding: 20,
    },
    heading: {
        color: colors.darkGrey,
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal:20 ,
        paddingVertical: 10
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
        // justifyContent: 'space-between',
        // alignItems: 'center',
        alignContent: 'stretch',
    },
    card: {
        backgroundColor: colors.white,
        color: colors.primary,
        width: '100%',
        height: 90,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderRadius: 5,
        elevation: 2.5,
        padding: 10,
        // borderWidth: 1
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardName: {
        //   color: colors.primary,
        color: colors.greyFont,
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: 'Open Sans',
        textTransform: 'capitalize'
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
    selected: {
        borderColor: colors.primary,
        borderWidth: 1,
        backgroundColor: colors.lightPrimary
    },
    formSection: {
        flex: 1
    }
})