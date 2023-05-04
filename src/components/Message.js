import { View, Text } from 'react-native'
import React from 'react'
import { messageStyles } from './styles/messageStyles'

const Message = ({ id, text }) => {
    if (id == 'me') {
        return (

            <View style={[messageStyles.main, { justifyContent: 'flex-end' }]}>
                <View style={messageStyles.message}>
                    <Text style={{ color: 'white' }}>{text}</Text>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={[messageStyles.main, { justifyContent: 'flex-start' }]}>
                <View style={messageStyles.message}>
                    <Text style={{ color: 'white' }}>{text}</Text>
                </View>
            </View>
        )
    }

}

export default Message