import { StyleSheet, Text, View } from 'react-native';
import RadioButton from './RadioButton';
import React from 'react'


const SmallRadioButtons = ({ data }) => {

    return (
        <View style={[styles.sortContainer, styles.screen]}>
            <View>
                <View >
                    <RadioButton data={data} />
                </View>
            </View>
        </View>
    )
}

export default SmallRadioButtons

const styles = StyleSheet.create({
    normalRadioButton: {
        borderWidth: 2,
        borderColor: "rgba(228, 228, 228, 0.71)",
        borderRadius: 7,
        height: 50,
        width: '50%',
        alignItems: 'center',
        flexDirection: 'row'
    },
    sortContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,

    },
    screen: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    radioContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderColor: "#6c7ef5",
        borderRadius: 50,
        marginHorizontal: 10,
        padding: 2
    },
    radioCircleChecked: {
        height: 12,
        width: 12,
        backgroundColor: "#6c7ef5",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})