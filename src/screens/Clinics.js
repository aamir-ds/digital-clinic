import { FlatList, Image, StatusBar, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { clinics } from '../config/dummy';
import colors from '../config/colors';
import Fa from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNetInfo } from "@react-native-community/netinfo";
import Skeleton from '../components/Skeleton';
import SkeletonCard from '../components/SkeletonCard';







const Item = ({ name, distance, address, ratings, image, navigation }) => (
    <Pressable android_ripple={{ color: colors.lightPrimary, borderless: false, radius: 200 }} onPress={() => navigation.navigate('Map')} style={styles.item}>
        <View style={{
            flexDirection: 'row',
            padding: 18,
            borderBottomWidth: 2,
            borderColor: colors.lightGrey
        }}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                <Image style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    resizeMode: 'contain',
                    marginRight: 15
                }} source={image} />
                <View style={{ flex: 1 }}>

                    <Text style={{ fontSize: 15, fontWeight: '400', color: colors.black, marginBottom: 5 }}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 style={{ marginRight: 5 }} size={10} color={colors.greyFont} name={'location-arrow'} />
                        <Text style={{ fontSize: 12, fontWeight: '400', color: colors.greyFont }}>{distance} away</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightGrey, height: 27, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                <Fa style={{ marginRight: 5 }} size={14} color={colors.primary} name={'star'} />
                <Text style={{ fontSize: 13, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
            </View>
        </View>

        <View style={{
            padding: 18,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={{ height: 30, width: 30, borderColor: colors.lightGrey, borderWidth: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginRight: 10 }}>
                    <Octi size={15} color={colors.greyFont} name={'location'} />
                </View>
                <Text style={{ color: colors.greyFont, fontSize: 13 }}>{address}</Text>
            </View>
            <Feather style={{ marginRight: 5 }} size={16} color={colors.greyFont} name={'arrow-right'} />
        </View>

    </Pressable>
);


const Clinics = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const netInfo = useNetInfo();


    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ marginRight: 15, marginLeft: 10 }}>
                        <Feather size={18} color={colors.white} name={'search'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Map')} style={{ marginRight: 5, marginLeft: 10 }} >
                        <Octi size={18} color={colors.white} name={'location'} />
                    </TouchableOpacity>
                </View>
            ),
            headerStyle: {
                backgroundColor: colors.primary,
                elevation: 1, // remove shadow on Android
                shadowOpacity: 1, // remove shadow on iOS
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
                fontWeight: '400',
                fontSize: 18

            },
        });
    }, [navigation]);


    useEffect(() => {
        setLoading(true)
        loaderFunction()
    }, [netInfo])

    const loaderFunction = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }



    const renderItem = ({ item }) => (
        <Item name={item.name}
            distance={item.distance}
            address={item.address}
            ratings={item.ratings}
            image={item.image}
            navigation={navigation} />
    );

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={colors.primary} />

            {netInfo.isConnected ?
                <>
                    {loading ?
                        <SkeletonCard /> :
                        <FlatList
                            data={clinics}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            ListHeaderComponent={() => (
                                <View style={{ padding: 5 }} />
                            )}
                        // ItemSeparatorComponent={ItemSeperator}
                        />}
                </> :
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Image
                        style={{ height: 300, width: 300 }}
                        source={require('../assets/images/no-internet.png')}
                    />

                </View>}
        </View>
    )
}

export default Clinics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGrey
        // marginVertical: 16
    },
    item: {
        marginHorizontal: 17,
        backgroundColor: colors.white,
        marginVertical: 9,
        borderRadius: 4
    },
})