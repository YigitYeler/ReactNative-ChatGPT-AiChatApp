import { View, Text } from 'react-native'
import React from 'react'
import { messageStyles } from './styles/messageStyles'
import LinearGradient from 'react-native-linear-gradient'
import { themeColors } from '../enums/colorEnums'

const Message = ({ id, text }) => {
    return (

        <View
            style={[
                messageStyles.main, id == 'me' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }
            ]}>
            <LinearGradient
                style={messageStyles.message}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#5454ff', "#30c8ff"]}
            >
                <Text style={{ color: 'white' }}>{text}</Text>
            </LinearGradient>

        </View>

    )

}

export default Message