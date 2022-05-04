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
            <Button
                title="Go to Doctor Profile page"
                onPress={() => navigation.navigate('DoctorProfile')}
            />
            <Button
                title="Call doctor"
                onPress={() => navigation.navigate('DoctorCalling')}
            />
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