import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Links = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Payment"
                onPress={() => navigation.navigate('PaymentProcess')}
            />
            <Button
                title="Booking"
                onPress={() => navigation.navigate('Booking')}
            />

        </View>
    )
}

export default Links

const styles = StyleSheet.create({})