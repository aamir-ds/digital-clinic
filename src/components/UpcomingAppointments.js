import { FlatList, Image, StyleSheet, Text, Pressable, View, TouchableOpacity    } from 'react-native'
import React from 'react'
import { doctors } from '../config/dummy';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Ion from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';



const Item = ({ name, distance, ratings, image, reviews, type, video, navigation }) => (


    <View  style={styles.item} >
        <View style={{
            flexDirection: 'row',
            padding: 15,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('DoctorProfile')}>
                <Image style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    resizeMode: 'contain',
                    marginRight: 20
                }} source={image} />
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                <View style={{ flex: 1, marginTop: 3 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('DoctorProfile')}>
                        <Text style={{ fontSize: 18, fontWeight: '400', color: colors.black, marginBottom: 5 }}>{name}</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, fontWeight: '400', color: colors.greyFont, marginBottom: 5 }}>{type}</Text>
                </View>
                <SimpleLineIcons style={{ marginRight: 5 }} size={15} color={colors.primary} name={'options-vertical'} />
            </View>
        </View>

        <View style={{
            paddingBottom: 15,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomColor: colors.lightGrey,
            borderBottomWidth: 3

        }}>
            {video ? <TouchableOpacity onPress={() => navigation.navigate('DoctorCalling')} style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Feather style={{ marginRight: 10 }} size={20} color={colors.primary} name={'video'} />
                <Text style={{ color: video ? colors.primary : colors.greyFont, fontSize: 14 }}>Video Visit</Text>
            </TouchableOpacity> :
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Octi style={{ marginRight: 10 }} size={20} color={colors.greyFont} name={'location'} />
                    <Text style={{ color: video ? colors.primary : colors.greyFont, fontSize: 14 }}>Office visit only</Text>
                </View>}
            <MaterialCommunityIcons style={{ marginRight: 5 }} size={20} color={colors.greyFont} name={'timer-outline'} />
            <Text style={{ color: colors.greyFont, fontSize: 14 }}>1 hour</Text>
        </View>
        <View style={{
            paddingBottom: 5,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10

        }}>
            <View style={{ flex: 1, }}>
                <Text style={{ color: colors.greyFont, fontSize: 14, marginBottom: 5 }}>In 5 Days</Text>
                <Text style={{ color: colors.black, fontSize: 16 }}>12 May 2020</Text>
            </View>
            <Pressable android_ripple={{color: colors.mediumGreen,borderless: false, radius: 40}}
             onPress={() => navigation.navigate('DoctorCalling')} style={{ backgroundColor: colors.lightGrey, marginRight: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: colors.greenOutline, height: 40, width: 40, borderRadius: 6 }}>
                <Feather size={20} color={colors.greenOutline} name={'video'} />
            </Pressable>
            <Pressable android_ripple={{color: colors.lightPurple,borderless: false, radius: 40}}
             style={{ backgroundColor: colors.lightGrey, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: colors.primary, height: 40, width: 40, borderRadius: 6 }}>
                <Ion size={20} color={colors.primary} name={'ios-chatbubble-ellipses-outline'} />
            </Pressable>
        </View>
        <View style={{
            paddingBottom: 15,
            paddingHorizontal: 15,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10
        }}>
            <Pressable 
            onPress={() => navigation.navigate('DoctorCalling')} 
            android_ripple={{color: colors.mediumGreen,borderless: false, radius: 200}}
                style={{ backgroundColor: colors.lightGreen, alignItems: 'center', justifyContent: 'center', borderRadius: 5, height: 40, width: '100%', borderColor: colors.greenOutline, borderWidth: 1 }}>
                <Text style={{ color: colors.greenOutline, fontSize: 16 }}>Video call will start soon</Text>
            </Pressable>

        </View>

    </View >
);

const UpcomingAppointments = ({ navigation }) => {

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
            navigation={navigation}
        />
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={doctors}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                // ListHeaderComponent={SortContainer}
                />
            </View>
        </>
    )
}

export default UpcomingAppointments

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 16
    },
    item: {
        marginHorizontal: 16,
        backgroundColor: colors.white,
        marginVertical: 10,
        borderRadius: 5
    },
})