import React from 'react';
import { FlatList, Image, StyleSheet, Text, Pressable, View, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { doctors } from '../config/dummy';
import SortContainer from './SortContainer';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ion from 'react-native-vector-icons/Ionicons';
import Fa from 'react-native-vector-icons/FontAwesome';




const Item = ({ name, distance, ratings, image, reviews, type, video, navigation }) => (


    <View style={styles.item}>
        <View style={{
            flexDirection: 'row',
            paddingBottom: 15,
            paddingHorizontal: 20,
            paddingTop: 10,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 15 }}
                onPress={() => navigation.navigate('DoctorProfile')}
            >
                {video && <View style={{
                    height: 14, width: 14,
                    backgroundColor: colors.greenOutline, position: 'absolute', zIndex: 1,
                    borderRadius: 50,
                    bottom: 0,
                    left: 40
                }} />}
                <Image style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    resizeMode: 'contain',
                }}
                    source={image}
                />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('DoctorProfile')}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: colors.black, marginBottom: 5 }}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 13, fontWeight: '400', color: colors.greyFont, marginBottom: 5 }}>{type}</Text>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Map')}>
                        <Text style={{ fontSize: 13, fontWeight: '400', color: colors.greyFont }}>
                            <Octi size={13} color={colors.greyFont} name={'location'} />  {distance} away</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Fa style={{ marginRight: 5 }} size={14} color={colors.primary} name={'star'} />
                        <Text style={{ fontSize: 14, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: colors.greyFont, marginTop: 2 }}>({reviews})</Text>
                </View>

            </View>
        </View>

        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingBottom: 15,
            paddingHorizontal: 20,
            paddingTop: 10
        }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => video && navigation.navigate('DoctorCalling')}
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                {video ? <Feather style={{ marginRight: 10 }} size={18} color={colors.primary} name={'video'} /> :
                    <Feather style={{ marginRight: 10 }} size={18} color={colors.greyFont} name={'video-off'} />}
                <Text style={{ color: video ? colors.primary : colors.greyFont, fontSize: 13 }}>Video Visit</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Pressable android_ripple={{ color: colors.lightPrimary, borderless: true, radius: 20 }}
                    onPress={() => navigation.navigate('Appointments')}
                    style={{

                    }}
                >
                    <Entypo size={18} color={colors.greyFont} name={'calendar'} />
                </Pressable>
                <Pressable android_ripple={{ color: colors.lightPrimary, borderless: true, radius: 20 }} style={{ marginLeft: 20 }}>
                    <Ion size={18} color={colors.greyFont} name={'ios-chatbubble-ellipses-outline'} />
                </Pressable>
            </View>
        </View>

    </View>
);


const DoctorsList = ({ navigation }) => {

    const renderItem = ({ item }) => (
        <Item name={item.name}
            distance={item.distance}
            type={item.type}
            address={item.address}
            ratings={item.ratings}
            reviews={item.reviews}
            experience={item.experience}
            fees={item.fees}
            location={item.location}
            online={item.online}
            video={item.video}
            image={item.image}
            navigation={navigation} />
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={doctors}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={SortContainer}
                    style={{ flex: 1 }}
                />
            </View>
        </>
    )
}

export default DoctorsList

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