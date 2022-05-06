import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { clinics } from '../config/dummy';
import colors from '../config/colors';
import Fa from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octi from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';





const Item = ({ name, distance, address, ratings, image, navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Map')} activeOpacity={0.7} style={styles.item}>
        <View style={{
            flexDirection: 'row',
            padding: 20,
            borderBottomWidth: 2,
            borderColor: colors.lightGrey
        }}>
            <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                <Image style={{
                    width: 75,
                    height: 75,
                    borderRadius: 100,
                    resizeMode: 'contain',
                    marginRight: 20
                }} source={image} />
                <View style={{ flex: 1 }}>

                    <Text style={{ fontSize: 20, fontWeight: '400', color: colors.black, marginBottom: 5 }}>{name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 style={{ marginRight: 5 }} size={13} color={colors.greyFont} name={'location-arrow'} />
                        <Text style={{ fontSize: 16, fontWeight: '400', color: colors.greyFont }}>{distance} away</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightGrey, height: 27, width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                <Fa style={{ marginRight: 5 }} size={15} color={colors.primary} name={'star'} />
                <Text style={{ fontSize: 17, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
            </View>
        </View>

        <View style={{
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <View style={{ height: 40, width: 40, borderColor: colors.lightGrey, borderWidth: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginRight: 10 }}>
                    <Octi size={20} color={colors.greyFont} name={'location'} />
                </View>
                <Text style={{ color: colors.greyFont, fontSize: 16 }}>{address}</Text>
            </View>
            <Feather style={{ marginRight: 5 }} size={20} color={colors.greyFont} name={'arrow-right'} />
        </View>

    </TouchableOpacity>
);


const Clinics = ({ navigation }) => {
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
            <FlatList
                data={clinics}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={ItemSeperator}
            />
        </View>
    )
}

export default Clinics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginVertical: 16
    },
    item: {
        marginHorizontal: 16,
        backgroundColor: colors.white,
        marginVertical: 10
    },
})