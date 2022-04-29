import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const SortContainer = () => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, marginBottom: 10, marginHorizontal: 20 }}>
            <Text style={{ color: colors.black, fontSize: 16 }}>Doctor List</Text>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <Text style={{ color: colors.greyFont }}>Sort View</Text>
                <View style={{ height: 30, width: 30, borderColor: colors.lightGrey, borderWidth: 3, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginLeft: 10 }}>
                    <Text>H</Text>
                </View>
            </TouchableOpacity>
        </View >
    )
}

export default SortContainer

const styles = StyleSheet.create({})