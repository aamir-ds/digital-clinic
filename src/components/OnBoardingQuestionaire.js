import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';


const QuestionSet1 = () => {

    return (
        <View style={styles.radioList}>
            <TouchableOpacity style={styles.radioButtons} activeOpacity={0.6}>
                <View style={styles.radioOuter}>
                    <View style={styles.radioInner}></View>
                </View>
                <Text style={styles.radioLabel}>Once</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButtons} activeOpacity={0.6}>
                <View style={styles.radioOuter}>
                    {/* <View style={styles.radioInner}></View> */}
                </View>
                <Text style={styles.radioLabel}>More than once</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioButtons} activeOpacity={0.6}>
                <View style={styles.radioOuter}>
                    {/* <View style={styles.radioInner}></View> */}
                </View>
                <Text style={styles.radioLabel}>less than once</Text>
            </TouchableOpacity>
        </View>
    )
}


const QuestionSet2 = () => {

    return (
        <View style={styles.radioInline}>
            <TouchableOpacity style={styles.radioFlexButtons} activeOpacity={0.6}>
                <View style={styles.radioOuter}>
                    <View style={styles.radioInner}></View>
                </View>
                <Text style={styles.radioLabel}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.radioFlexButtons} activeOpacity={0.6}>
                <View style={styles.radioOuter}>
                    {/* <View style={styles.radioInner}></View> */}
                </View>
                <Text style={styles.radioLabel}>No</Text>
            </TouchableOpacity>
        </View>
    )
}

export default function OnBoardingQuestionaire(props) {

    const navigation = useNavigation()

    const questionairre = [
        {
            id: 1,
            question: 'How many times a year do you visit general practitioner?',
        },
        {
            id: 2,
            question: 'Do you have chronic conditions?',
        },
    ]

    const [questionSet, setQuestion] = React.useState(questionairre[0])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.content}>
                <View style={styles.questionSection}>
                    <Text style={styles.question}>{questionSet.question}</Text>
                </View>
                <View style={styles.answerSection}>
                    <QuestionSet1 />
                    {/* <QuestionSet2 /> */}
                </View>
                <View style={styles.totals}>
                    <Text style={styles.totalText}>Question 1 of 4</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={() => navigation.navigate('Tabs')}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            <View style={styles.progressContainer}>
                <View style={styles.progressState}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '90%',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    totals: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    question: {
        color: colors.white,
        fontSize: 20,
        lineHeight: 35,
        textAlign: 'center'
    },
    questionSection: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // borderWidth: 1
    },
    totalText: {
        color: colors.white,
        textTransform: 'uppercase',
        fontSize: 14
    },
    radioInline: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioLabel: {
        color: colors.white,
        fontSize: 14,
        textTransform: 'uppercase',
        marginLeft: 15
    },
    radioButtons: {
        flexDirection: 'row',
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: colors.purple,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 15,
        alignItems: 'center'
    },
    radioOuter: {
        width: 16,
        height: 16,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioInner: {
        width: 10,
        height: 10,
        backgroundColor: colors.white,
        borderRadius: 100
    },
    radioFlexButtons: {
        width: '50%',
        flexDirection: 'row',
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: colors.purple,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 15,
        alignItems: 'center'
    },
    progressContainer: {
        height: 5,
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: colors.purple
    },
    progressState: {
        flexDirection: 'column',
        width: '50%',
        height: 5,
        borderRadius: 5,
        backgroundColor: colors.white
    }
})