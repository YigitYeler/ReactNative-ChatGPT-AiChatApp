import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { sizeEnum } from '../enums/sizeEnums'
import { navigateButtonStyles } from './styles/navigateButtonStyles'

const NavigateButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={navigateButtonStyles.button}
            onPress={onPress}
        >
            <Text style={navigateButtonStyles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default NavigateButton