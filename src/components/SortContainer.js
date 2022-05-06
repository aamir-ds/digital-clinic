import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SortContainer = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginBottom: 10, marginHorizontal: 20 }}>
            <Text style={{ color: colors.black, fontSize: 16 }}>Doctor List</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ color: colors.greyFont, marginRight: 6 }}>Sort View</Text>
                <MaterialCommunityIcons size={25} color={colors.greyFont} name={'view-quilt-outline'} />
            </TouchableOpacity>
        </View >
    )
}

export default SortContainer

const styles = StyleSheet.create({})