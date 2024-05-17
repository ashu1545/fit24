import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TooltipView = ({ text }) => {
    return (
        <LinearGradient
            colors={['#EEA4CE', '#C58BF2']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.tooltip}
        >
                <Text style={styles.tooltipText}>{text}</Text>
                <View style={styles.arrow}></View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    tooltip: {
        backgroundColor: '#C58BF2',
        padding: 5,
        borderRadius: 20,
        // position: 'relative',
        alignItems: 'center',
        width: 73,
        marginLeft: 193,
        marginTop: -25
    },
    tooltipText: {
        color: '#fff',
        fontSize: 14,
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 5,
        borderLeftColor: 'transparent',
        borderRightWidth: 5,
        borderRightColor: 'transparent',
        borderTopWidth: 5,
        borderTopColor: '#C58BF2',
        position: 'absolute',
        bottom: -3,
    },
});

export default TooltipView;
