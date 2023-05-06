import { View, Text, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Message from '../components/Message'
import { chatStyles } from './styles/chatStyles'
import { Dimensions } from 'react-native';
import { openai } from '../config/openAiConfig';
import { useHeaderHeight } from '@react-navigation/elements';
import { themeColors } from '../enums/colorEnums';



const AiChat = () => {
    const headerHeight = useHeaderHeight();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - headerHeight;

    const flatList = useRef(null);
    const [text, setText] = useState('')
    const [chat, setChat] = useState([])
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);
    const [keybordHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            (e) => {
                setKeyboardHeight(e.endCoordinates.height)
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const handleSubmit = async () => {
        let newValue = { 'id': 'me', 'message': text };
        setChat(chat => [...chat, newValue]);
        setText('')
        try {
            const result = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [{ role: 'user', content: text }]
            });
            newValue = { 'id': 'ai', 'message': result.data.choices[0].message.content };
            setChat(chat => [...chat, newValue]);
            setText('')
        } catch (e) {
            console.log("Something is going wrong, Please try again.", e);
        }
    };

    return (
        <View style={chatStyles.main}>
            <View style={chatStyles.flatListView}>
                {chat.length == 0 ?
                    (
                        <Text style={{ color: 'white', textAlign: 'center' }}>
                            Mesajlar sayfadan çıkılınca silinir
                        </Text>
                    ) :
                    (
                        <FlatList
                            data={chat}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                console.log(item)
                                return (
                                    <Message
                                        id={item.id}
                                        text={item.message}
                                    />
                                )
                            }}
                            ref={flatList}
                            onContentSizeChange={() => flatList.current.scrollToEnd({ animated: false })}
                            onLayout={() => flatList.current.scrollToEnd({ animated: false })}
                        />
                    )
                }

            </View>
            <View style={chatStyles.bottomView} >
                <TextInput
                    style={chatStyles.textInput}
                    placeholder='Mesaj Giriniz'
                    placeholderTextColor={'grey'}
                    onChangeText={(txt) => setText(txt)} value={text}
                />
                <TouchableOpacity
                    style={chatStyles.sendButton}
                    onPress={handleSubmit}
                >
                    <Text style={{ color: 'white' }}>Gönder</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default AiChat