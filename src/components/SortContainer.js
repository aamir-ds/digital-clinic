import { StyleSheet, Text, Pressable, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const SortContainer = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginHorizontal: 20 }}>
            {/* , marginTop: 20, marginBottom: 10, marginHorizontal: 20 */}
            <Text style={{ flex:1, color: colors.black, fontSize: 16, paddingRight: 15, marginTop: 15, marginBottom: 5}}>Doctor List</Text>
            <Pressable android_ripple={{color: colors.lightPurple,borderless: false, radius: 50}} 
            style={{ flexDirection: 'row', alignItems: 'center',  marginLeft: 15, paddingVertical: 5}}>
                <Text style={{ color: colors.greyFont, fontSize:13 , marginRight: 6 }}>Sort View</Text>
                <MaterialCommunityIcons size={20} color={colors.greyFont} name={'view-quilt-outline'}/>
            </Pressable>
        </View >
    )
}

export default SortContainer

const styles = StyleSheet.create({})