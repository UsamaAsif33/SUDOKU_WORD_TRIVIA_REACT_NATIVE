import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width, height } from 'react-native-dimension'
import { colors } from '../../constants'

export const Hrline = ({ Width, height, color, style }) => {
    return (
        <View style={[{ height: height ?? 1.5, width: Width ?? width(100), backgroundColor: color ?? colors.appBorderColor6, alignSelf: 'center', marginVertical: 15 }, style]} />
    )
}
export const Vrline = ({ Width, Height, color, style }) => {
    return (
        <View style={[{ height: Height ?? height(10), width: Width ?? 1.5, backgroundColor: color ?? colors.appBorderColor6, alignSelf: 'center', marginVertical: 15 }, style]} />
    )
}


const styles = StyleSheet.create({

})