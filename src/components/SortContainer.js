import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SortContainer = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'center', marginHorizontal: 20 }}>
            <Text style={{ flex: 1, color: colors.black, fontSize: 13, paddingRight: 15, marginTop: 15, marginBottom: 5 }}>Doctor List</Text>
            <Pressable android_ripple={{ color: colors.lightPurple, borderless: false, radius: 50 }}
                style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 5 }}>
                <Text style={{ color: colors.greyFont, fontSize: 11, marginRight: 6 }}>Sort View</Text>
                <MaterialCommunityIcons size={18} color={colors.greyFont} name={'view-quilt-outline'} />
            </Pressable>
        </View >
    )
}

export default SortContainer

const styles = StyleSheet.create({})