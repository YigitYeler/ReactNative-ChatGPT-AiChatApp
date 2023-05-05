import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AiChat from '../screens/AiChat';
import ImageGeneration from '../screens/ImageGeneration';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AiChat" component={AiChat} />
                <Stack.Screen name="ImageGeneration" component={ImageGeneration} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation