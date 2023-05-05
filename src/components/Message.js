import { View, Text } from 'react-native'
import React from 'react'
import { messageStyles } from './styles/messageStyles'

const Message = ({ id, text }) => {
    return (
        <View style={[messageStyles.main, id == 'me' ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }]}>
            <View style={messageStyles.message}>
                <Text style={{ color: 'white' }}>{text}</Text>
            </View>
        </View>
    )

}

export default Message