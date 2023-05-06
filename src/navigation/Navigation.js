import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import AiChat from '../screens/AiChat';
import ImageGeneration from '../screens/ImageGeneration';
import { themeColors } from '../enums/colorEnums';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="AiChat"
                    component={AiChat}
                    options={{
                        headerTitle: 'Ai Chat',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="ImageGeneration"
                    component={ImageGeneration}
                    options={{
                        headerTitle: 'Image Generation',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: 'black',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation