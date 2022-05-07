import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import SmallRadioButtons from './SmallRadioButtons';
import { cornicAnswer, doctorVisitAnswer, OnBoardingQuestion } from '../config/dummy';
import { ColorSpace } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';





const Item = ({ item, onPress, selectedBtn }) => (
    <TouchableOpacity onPress={onPress} style={{ borderWidth: 1, borderColor: colors.white, borderRadius: 4, padding: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.darkPrimary }}>
        <View style={{ height: 20, width: 20, borderWidth: 1, borderColor: colors.white, borderRadius: 50, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
            <View style={selectedBtn}></View>
        </View>
        <Text style={{ color: colors.white }}>{(item.answer).toUpperCase()}</Text>
    </TouchableOpacity >

)
const ItemSecond = ({ item, onPress, selectedBtn }) => (
    <TouchableOpacity onPress={onPress} style={{ borderWidth: 1, borderColor: colors.white, borderRadius: 4, padding: 15, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.darkPrimary, width: 154 }}>
        <View style={{ height: 20, width: 20, borderWidth: 1, borderColor: colors.white, borderRadius: 50, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
            <View style={selectedBtn}></View>
        </View>
        <Text style={{ color: colors.white }}>{(item.answer).toUpperCase()}</Text>
    </TouchableOpacity >

)


export default function OnBoardingQuestionaire(props) {
    const [selectedCondition, setSelectedCondition] = useState('Select');
    const [customerCondition, setCustomerCondition] = useState([]);



    const navigation = useNavigation()
    const [questionNumber, setQuestionNumber] = useState(0);

    const [quiz, setQuiz] = useState(OnBoardingQuestion[0])
    const [screen, setScreen] = useState(false)


    const handleQuestionChange = () => {
        if (questionNumber == 1) {

            setQuiz(OnBoardingQuestion[1])
            setScreen(true)
        }

        if (screen && (questionNumber == 2 || questionNumber == 4)) {
            navigation.navigate('Tabs')
        }
    }


    //for first question------------------------------
    const [selectedFirstId, setSelectedFirstId] = useState(null);
    const renderFirst = ({ item }) => {
        const selectedBtn = item.id === selectedFirstId ? { height: 13, width: 13, backgroundColor: colors.white, borderRadius: 50 } : <></>

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedFirstId(item.id)
                    setQuestionNumber(1);

                }}
                selectedBtn={selectedBtn}
            />
        );
    };

    //for Second question------------------------------
    const [selectedSecondId, setSelectedSecondId] = useState(null);
    const renderSecond = ({ item }) => {
        const selectedBtn = item.id === selectedSecondId ? { height: 13, width: 13, backgroundColor: colors.white, borderRadius: 50 } : <></>

        return (
            <ItemSecond
                item={item}
                onPress={() => {
                    setSelectedSecondId(item.id);
                    if (item.id == 1) {
                        setQuestionNumber(2);
                    } else {
                        setQuestionNumber(3);
                    }
                }}
                selectedBtn={selectedBtn}
            />
        );
    };

    ////////////////////////////

    return (
        <View style={{ flex: 1 }}>
            {screen ? <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => {
                    setScreen(false);
                    setSelectedFirstId(null);
                    setSelectedSecondId(null);
                    setQuestionNumber(0);
                    setQuiz(OnBoardingQuestion[0]);
                    setCustomerCondition([]);
                    setSelectedCondition('Select')
                    // props.onChange(true);
                }}>
                    <Ionicons style={{ marginRight: 10 }} size={22} color={colors.white} name={'arrow-back'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <Text style={{ fontSize: 12, color: colors.lightGrey }}>Skip</Text>
                </TouchableOpacity>
            </View> :
                <View style={{ alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                        <Text style={{ fontSize: 12, color: colors.lightGrey }}>Skip</Text>
                    </TouchableOpacity>
                </View>}
            <View style={{ flex: 1, marginTop: '35%' }}>
                <Text style={{
                    marginBottom: 80, fontSize: 20,
                    color: colors.white, textAlign: 'center', lineHeight: 32
                }}>{quiz.question}
                </Text>
                {
                    !screen ?
                        <View>
                            <FlatList
                                data={doctorVisitAnswer}
                                renderItem={renderFirst}
                                keyExtractor={(item) => item.id}
                                ItemSeparatorComponent={() =>
                                    <View style={{ height: 15, width: '100%' }}></View>
                                }
                                extraData={selectedFirstId}
                            />
                        </View> :
                        <View>
                            <View style={{ width: '100%' }} >
                                <FlatList
                                    data={cornicAnswer}
                                    horizontal

                                    renderItem={renderSecond}
                                    keyExtractor={(item) => item.id}
                                    ItemSeparatorComponent={() =>
                                        <View style={{ height: '100%', width: 15 }}></View>
                                    }
                                    extraData={selectedSecondId}
                                />

                            </View>
                            {selectedSecondId == 2 &&
                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ marginBottom: 20, fontSize: 13, color: colors.lightGrey, lineHeight: 22 }}>Define your condition, please. This information is needed for your doctors.</Text>
                                    <View style={{ backgroundColor: colors.darkPrimary, borderColor: colors.white, borderWidth: 1, borderRadius: 4, marginBottom: 15 }}>

                                        <Picker
                                            style={{ width: '100%', padding: 15, color: colors.white }}
                                            selectedValue={selectedCondition}
                                            dropdownIconColor={colors.white}
                                            onValueChange={(itemValue, itemIndex) => {
                                                setSelectedCondition(itemValue);
                                                let index = customerCondition.indexOf(itemValue)
                                                customerCondition.push(itemValue)
                                                setQuestionNumber(4)

                                            }}>

                                            <Picker.Item themeVariant={'light'} style={{ width: '100%', backgroundColor: colors.darkPrimary }} label="Asthama" value="Asthama" />
                                            <Picker.Item themeVariant={'light'} style={{ width: '100%', backgroundColor: colors.darkPrimary }} label="Malaria" value="Malaria" />
                                            <Picker.Item themeVariant={'light'} style={{ width: '100%', backgroundColor: colors.darkPrimary }} label="Diabeties" value="Diabeties" />
                                        </Picker>
                                    </View>
                                    <ScrollView style={{ height: '32%' }}>
                                        {
                                            customerCondition.map((ele, i) => {

                                                return <View key={i} style={{ padding: 15, paddingLeft: 0, paddingRight: 0, borderBottomColor: colors.white, borderBottomWidth: 1, flexDirection: 'row' }}>
                                                    <MaterialCommunityIcons style={{ marginRight: 10 }} size={20} color={colors.white} name={'check-circle-outline'} />
                                                    <Text style={{ flex: 1, color: colors.white }}>{ele}</Text>
                                                    <MaterialCommunityIcons onPress={() => {
                                                        const newTodos = customerCondition.filter((t) => t !== ele);
                                                        setCustomerCondition(newTodos);
                                                    }} style={{ marginLeft: 10 }} size={20} color={colors.white} name={'window-close'} />
                                                </View>
                                            })
                                        }
                                    </ScrollView>
                                </View>}
                        </View>

                }


            </View>
            <Text style={{ marginBottom: 60, textAlign: 'center' }}>Question 1 of 4</Text>
            <TouchableOpacity style={styles.button} activeOpacity={0.6} onPress={handleQuestionChange} >
                {questionNumber == 2 || questionNumber == 4 ? <Text style={[styles.buttonText]}>Get Started</Text> : <Text style={[styles.buttonText]}>Next</Text>}
            </TouchableOpacity>
            <View style={{ height: 6, backgroundColor: colors.darkPrimary, width: '100%', marginTop: 30, borderRadius: 50 }}>
                <View style={{
                    height: 6, backgroundColor: colors.white,
                    width: questionNumber === 0 ? '0%' : questionNumber === 1 ? '30%' : questionNumber === 2 ? '100%' : questionNumber === 3 ? '80%' : questionNumber === 4 ? '100%' : '', borderRadius: 50
                }}></View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    }, button: {
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center'
    },
    buttonText: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: '700',
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