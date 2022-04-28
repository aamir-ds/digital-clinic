import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Appointments = ({ navigation }) => {
  return (
    <View>
      <Text>Appointments</Text>
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

export default Appointments

const styles = StyleSheet.create({})