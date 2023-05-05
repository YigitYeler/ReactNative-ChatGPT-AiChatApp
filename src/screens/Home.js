import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('AiChat')}
            >
                <Text>AiChat</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ImageGeneration')}
            >
                <Text>ImageGeneration</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home