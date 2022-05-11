import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import colors from '../config/colors';

const Skeleton = ({ height, width, variant = 'box' }) => {
    const opacity = useRef(new Animated.Value(0.3));

    let borderRadius = 0;

    if (variant === 'circle') {
        borderRadius =
            typeof height === 'string' ? parseInt(height, 10) / 2 : height / 2;
    }

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity.current, {
                    toValue: 1,
                    useNativeDriver: true,
                    duration: 500,
                }),
                Animated.timing(opacity.current, {
                    toValue: 0.3,
                    useNativeDriver: true,
                    duration: 800,
                }),
            ])
        ).start();
    }, [opacity])

    return (
        <Animated.View style={[{ opacity: opacity.current, height, width, borderRadius: variant === 'circle' ? 100 : 0 }, styles.skeleton]} />
    )
}

export default Skeleton

const styles = StyleSheet.create({
    skeleton: {
        backgroundColor: colors.greyFont,
    }
})