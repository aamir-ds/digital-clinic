import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { clinics } from '../config/dummy';
import colors from '../config/colors';



const Item = ({ name, distance, address, ratings, image }) => (
    <TouchableOpacity style={styles.item}>

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
                    <Text style={{ fontSize: 16, fontWeight: '400', color: colors.greyFont }}>{distance} away</Text>
                </View>
            </View>
            <View style={{ backgroundColor: colors.lightGrey, height: 30, width: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                <Text style={{ fontSize: 17, color: colors.primary, fontWeight: '500' }}>{ratings}</Text>
            </View>
        </View>

        <View style={{
            padding: 20,
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{ height: 40, width: 40, borderColor: colors.lightGrey, borderWidth: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginRight: 10 }}>
                <Text>H</Text>
            </View>
            <Text style={{ color: colors.greyFont, fontSize: 16 }}>{address}</Text>
        </View>

    </TouchableOpacity>
);


const Clinics = () => {
    const renderItem = ({ item }) => (
        <Item name={item.name}
            distance={item.distance}
            address={item.address}
            ratings={item.ratings}
            image={item.image} />
    );

    return (
        <View style={styles.container}>
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