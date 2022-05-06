import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, StatusBar, View, TouchableOpacity, Image, Button, ScrollView, useWindowDimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';
import MatIco from 'react-native-vector-icons/MaterialCommunityIcons';
import Ant from 'react-native-vector-icons/AntDesign';
import Octi from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIco from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/Ionicons';
import Fa from 'react-native-vector-icons/FontAwesome';
import CalendarPicker from 'react-native-calendar-picker';
import ButtonComponent from './ButtonComponent';


const TimeTab = () => {

    const [selectedStartDate, setDate] = React.useState(null)

    const customDatesStyles = [
        {
            style : {
                backgroundColor: 'transparent'
            },
            textStyle: {color: 'red'},
            containerStyle: [
                {
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: colors.primary,
                    backgroundColor: colors.lightGrey
                }
            ],
            allowDisabled: true,
        }
    ];
    
    const customMonthYearHeaderStyles = 
        {
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    const dayWrapper = {
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#eee',
        // backgroundColor: 'red'
    }

    const customDayHeaderStylesCallback = () => {
            return {
              style: {
              },
              textStyle: {
                color: colors.greyFont,
                fontSize: 14,
                fontWeight: 'bold',
              },
            };
      }

    const onDateChange = (date) => {
        setDate(date)
    }

    return (
        <View style={styles.container}>
        <View style={styles.calenderContainer}>
            <CalendarPicker
            selectedDayColor = {colors.lightGrey}
            selectedDayTextColor = {colors.black}
            customDayHeaderStyles={customDayHeaderStylesCallback}
            customDatesStyles={customDatesStyles}
            weekdays={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
            previousTitle={<EvilIco name='chevron-left' size={30} color={colors.greyFont}/>}
            nextTitle={<EvilIco name='chevron-right' size={30} color={colors.greyFont}/>}
            headerWrapperStyle={customMonthYearHeaderStyles}
            dayLabelsWrapper= {dayWrapper}
            />
        </View>

        <View style={styles.timeContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>Available Time</Text>
            </View>
            <View style={styles.timeSlots}>
                <Text style={styles.timings}>13:00 AM</Text>
                <Text style={styles.timings}>13:30 AM</Text>
                <Text style={[styles.timings, styles.selectedSlot]}>14:00 AM</Text>
                <Text style={styles.timings}>14:30 AM</Text>
                <Text style={styles.timings}>15:00 AM</Text>
                <Text style={styles.timings}>15:30 AM</Text>
                <Text style={styles.timings}>16:00 AM</Text>
                <Text style={styles.timings}>16:30 AM</Text>
            </View>
        </View>

        <View>
            <ButtonComponent title={'Next'}/>
        </View>
        </View>
    )
}

export default TimeTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 15,
    },
    calenderContainer: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 4,
        // paddingHorizontal: 10,
        // marginVertical: 10,
      },
      timeContainer: {
          flex: 1,
        //   padding: 15
      },
      timeSlots: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        alignContent: 'stretch',
        justifyContent: 'space-around',
        width: '100%',
        // maxHeight: 200,
        height: 100,
        // borderWidth: 1
      },
      header: {
          paddingVertical: 20,
      },
      title: {
          color: colors.black,
          fontSize: 16,
        //   fontWeight: 'bold'
      },
      selectedSlot: {
          backgroundColor: colors.primary,
          color: colors.white
      },
      timings:{ 
          fontSize: 14,
          color: colors.black,
          padding: 10,
        //   marginRight: 10,
          backgroundColor: colors.lightGrey,
          borderRadius: 4
      }
})