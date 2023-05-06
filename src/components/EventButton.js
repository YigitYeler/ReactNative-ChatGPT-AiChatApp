import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { eventButtonStyles } from './styles/eventButtonStyles'

const EventButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={eventButtonStyles.button}
            onPress={onPress}
        >
            <Text style={eventButtonStyles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default EventButton