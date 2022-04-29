import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { clinics, doctors } from '../config/dummy';
import SortContainer from './SortContainer';



const Item = ({ name, distance, ratings, image, reviews, type, video }) => (
    <TouchableOpacity style={styles.item}>
        <View style={{
            flexDirection: 'row',
            padding: 20,
        }}>
            <Image style={{
                width: 75,
                height: 75,
                borderRadius: 100,
                resizeMode: 'contain',
                marginRight: 20
            }} source={image} />

            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'flex-start' }}>
                <View style={{ flex: 1, marginTop: 3 }}>
                    <Text style={{ fontSize: 20, fontWeight: '400', color: colors.black, marginBottom: 5 }}>{name}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: colors.greyFont, marginBottom: 5 }}>{type}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '400', color: colors.greyFont }}>{distance} away</Text>
                </View>
                <View style={{ alignItems: 'flex-end' }} >
                    <Text style={{ fontSize: 17, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
                    <Text style={{ fontSize: 14, color: colors.greyFont, }}>({reviews})</Text>
                </View>

            </View>
        </View>

        <View style={{
            paddingBottom: 20,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10
        }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ height: 30, width: 30, borderColor: colors.lightGrey, borderWidth: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginRight: 10 }}>
                    <Text>H</Text>
                </View>
                <Text style={{ color: video ? colors.primary : colors.greyFont, fontSize: 16 }}>Video Visit</Text>
            </View>
            <View style={{ height: 30, width: 30, borderColor: colors.lightGrey, borderWidth: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginRight: 10 }}>
                <Text>H</Text>
            </View>
            <View style={{ height: 30, width: 30, borderColor: colors.lightGrey, borderWidth: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                <Text>H</Text>
            </View>
        </View>

    </TouchableOpacity>
);


const DoctorsList = () => {

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
            image={item.image} />
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={doctors}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListHeaderComponent={SortContainer}
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
        marginHorizontal: 16,
        backgroundColor: colors.white,
        marginVertical: 10,
        borderRadius: 5
    },
})