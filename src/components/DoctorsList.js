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
            padding: 20,
            alignItems:'center',
            justifyContent: 'center'
        }}>
            <TouchableOpacity activeOpacity={0.7} style={{marginRight: 20}}
            onPress={() => navigation.navigate('DoctorProfile')}
            >
                <Image style={{
                    width: 75,
                    height: 75,
                    borderRadius: 100,
                    resizeMode: 'contain',
                }}
                    source={image}
                />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                <View style={{ flex: 1, marginTop: 3 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('DoctorProfile')}>
                        <Text style={{ fontSize: 20, fontWeight: '400', color: colors.black, marginBottom: 5 }}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: colors.greyFont, marginBottom: 5 }}>{type}</Text>

                    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate('Map')}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: colors.greyFont }}>
                            <Octi size={20} color={colors.greyFont} name={'location'} /> {distance} away</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end' }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Fa style={{ marginRight: 5 }} size={15} color={colors.primary} name={'star'} />
                        <Text style={{ fontSize: 17, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
                    </View>
                    <Text style={{ fontSize: 14, color: colors.greyFont, }}>({reviews})</Text>
                </View>

            </View>
        </View>

        <View style={{
            // paddingBottom: 20,
            // paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            // paddingTop: 10
        }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => video && navigation.navigate('DoctorCalling')} 
            style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 100 }}>
                {video ? <Feather style={{ marginRight: 10 }} size={20} color={colors.primary} name={'video'} /> :
                    <Feather style={{ marginRight: 10 }} size={20} color={colors.greyFont} name={'video-off'} />}
                <Text style={{ color: video ? colors.primary : colors.greyFont, fontSize: 16 }}>Video Visit</Text>
            </TouchableOpacity>
            <View style={{ flex: 1,flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                <Pressable android_ripple={{color: colors.lightPrimary,borderless: true, radius: 20}} 
                onPress={() => navigation.navigate('Appointments')} 
                style={{ paddingHorizontal: 20,
                paddingVertical: 10 }}
                >
                    <Entypo size={20} color={colors.greyFont} name={'calendar'} />
                </Pressable>
                <Pressable android_ripple={{color: colors.lightPrimary,borderless: true, radius: 20}} style={{paddingVertical: 10, paddingHorizontal: 20}}>
                    <Ion size={20} color={colors.greyFont} name={'ios-chatbubble-ellipses-outline'} />
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
                    style= {{flex: 1}}
                />
            </View>
        </>
    )
}

export default DoctorsList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 16
    },
    item: {
        marginHorizontal: 15,
        backgroundColor: colors.white,
        marginVertical: 10,
        borderRadius: 5
    },
})