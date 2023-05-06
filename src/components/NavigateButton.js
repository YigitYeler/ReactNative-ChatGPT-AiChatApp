import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { sizeEnum } from '../enums/sizeEnums'
import { navigateButtonStyles } from './styles/navigateButtonStyles'
import LinearGradient from 'react-native-linear-gradient'
import { themeColors } from '../enums/colorEnums'

const NavigateButton = ({ onPress, text }) => {
    return (

        <TouchableOpacity
            style={navigateButtonStyles.button}
            onPress={onPress}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                colors={['#5454ff', "#30c8ff"]}
                style={navigateButtonStyles.button}
            >
                <Text style={navigateButtonStyles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>

    )
}

export default NavigateButton