import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { eventButtonStyles } from './styles/eventButtonStyles'
import LinearGradient from 'react-native-linear-gradient'

const EventButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={eventButtonStyles.button}
            onPress={onPress}
        >
            <LinearGradient
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                colors={['#5454ff', "#30c8ff"]}
                style={eventButtonStyles.button}
            >
                <Text style={eventButtonStyles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default EventButton