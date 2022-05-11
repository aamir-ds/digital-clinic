import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Skeleton from './Skeleton'
import colors from '../config/colors'

const SkeletonCard = () => {
    return (
        <View style={{ marginHorizontal: 17, marginVertical: 30 }}>
            <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 4, padding: 20, marginBottom: 17 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                        <Skeleton height={60} width={60} variant='circle' />
                    </View>
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <Skeleton height={10} width={'100%'} />
                        <View style={{ marginTop: 10 }}>
                            <Skeleton height={10} width={'50%'} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingTop: 20, paddingBottom: 20 }}>
                    <Skeleton height={10} width={'100%'} />
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 4, padding: 20, marginBottom: 17 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                        <Skeleton height={60} width={60} variant='circle' />
                    </View>
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <Skeleton height={10} width={'100%'} />
                        <View style={{ marginTop: 10 }}>
                            <Skeleton height={10} width={'50%'} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingTop: 20, paddingBottom: 20 }}>
                    <Skeleton height={10} width={'100%'} />
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 4, padding: 20, marginBottom: 17 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                        <Skeleton height={60} width={60} variant='circle' />
                    </View>
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <Skeleton height={10} width={'100%'} />
                        <View style={{ marginTop: 10 }}>
                            <Skeleton height={10} width={'50%'} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingTop: 20, paddingBottom: 20 }}>
                    <Skeleton height={10} width={'100%'} />
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 4, padding: 20, marginBottom: 17 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                        <Skeleton height={60} width={60} variant='circle' />
                    </View>
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <Skeleton height={10} width={'100%'} />
                        <View style={{ marginTop: 10 }}>
                            <Skeleton height={10} width={'50%'} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingTop: 20, paddingBottom: 20 }}>
                    <Skeleton height={10} width={'100%'} />
                </View>
            </View>
            <View style={{ width: '100%', backgroundColor: colors.white, borderRadius: 4, padding: 20, marginBottom: 17 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginRight: 10 }}>
                        <Skeleton height={60} width={60} variant='circle' />
                    </View>
                    <View style={{ flex: 1, marginTop: 5 }}>
                        <Skeleton height={10} width={'100%'} />
                        <View style={{ marginTop: 10 }}>
                            <Skeleton height={10} width={'50%'} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingTop: 20, paddingBottom: 20 }}>
                    <Skeleton height={10} width={'100%'} />
                </View>
            </View>
        </View>

    )
}

export default SkeletonCard

const styles = StyleSheet.create({

})