import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Links = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to Clinics"
                onPress={() => navigation.navigate('Clinics')}
            />
            <Button
                title="Go to Bookings successfull page"
                onPress={() => navigation.navigate('BookingSuccessful')}
            />
        </View>
    )
}

export default Links

const styles = StyleSheet.create({})