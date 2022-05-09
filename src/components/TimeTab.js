import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import colors from '../config/colors';
import EvilIco from 'react-native-vector-icons/EvilIcons';
import CalendarPicker from 'react-native-calendar-picker';
import ButtonComponent from './ButtonComponent';
import { TimeSlots } from '../config/dummy'

const TimeTab = () => {

    const [selectedStartDate, setSelectedStartDate] = React.useState(null)
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    const customDatesStyles = [
        {
            style: {
                backgroundColor: 'transparent',
            },
            textStyle: { color: 'red' },
            containerStyle: [
                {
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: colors.primary,
                    backgroundColor: colors.lightGrey,
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
        setSelectedStartDate(date)
    }

    const [activeTimeSlot, setTimeSlot] = useState({})

    useEffect(() => {
        setTimeSlot(TimeSlots[0])
    }, [])


    const selectTime = (item) => {
        if (item.checked == false) {
            item.checked = true
            setTimeSlot(prev => prev.checked = false);
            setTimeSlot(item);
        } else {
            setTimeSlot(item);
        }
    }

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, flexDirection: 'column', margin: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Pressable style={[styles.timings, item.checked == true ? styles.selectedSlot : {}]} onPress={() => selectTime(item)}>
                <Text style={[{ fontSize: 12, color: colors.black }, item.checked == true ? { color: colors.white } : {}]}>{item.time}</Text>
            </Pressable>
        </View>
    )

    return (
        <View style={styles.container}>
            <View style={styles.calenderContainer}>
                <CalendarPicker
                    selectedDayColor={colors.primary}
                    selectedDayTextColor={colors.black}
                    customDayHeaderStyles={customDayHeaderStylesCallback}
                    customDatesStyles={customDatesStyles}
                    weekdays={['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']}
                    previousTitle={<EvilIco name='chevron-left' size={30} color={colors.greyFont} />}
                    nextTitle={<EvilIco name='chevron-right' size={30} color={colors.greyFont} />}
                    headerWrapperStyle={customMonthYearHeaderStyles}
                    dayLabelsWrapper={dayWrapper}
                    onDateChange={onDateChange}
                />
            </View>

            <View style={styles.timeContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>Available Time</Text>
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <FlatList
                        data={TimeSlots}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        numColumns={4}
                        key={item => item.id}
                    />
                </View>
            </View>

            <View style={{ paddingHorizontal: 15, paddingBottom: 15 }}>
                <ButtonComponent title={'Next'} route={'PaymentProcess'} />
            </View>
        </View>
    )
}

export default TimeTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        // padding: 15,
    },
    calenderContainer: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 4,
        margin: 15
        // paddingHorizontal: 10,
        // marginVertical: 10,
    },
    timeContainer: {
        flex: 1,
        // borderWidth: 1
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
        paddingHorizontal: 15
    },
    title: {
        color: colors.black,
        fontSize: 15,
        //   fontWeight: 'bold'
    },
    selectedSlot: {
        backgroundColor: colors.primary,
    },
    timings: {
        width: '100%',
        padding: 10,

        //   marginRight: 10,
        backgroundColor: colors.lightGrey,
        borderRadius: 2
    }
})