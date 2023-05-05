import { View, Text, TouchableOpacity, TextInput, FlatList, Keyboard } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Message from '../components/Message'
import { chatStyles } from './styles/chatStyles'
import { Dimensions } from 'react-native';
import { openai } from '../config/openAiConfig';
import { useHeaderHeight } from '@react-navigation/elements';



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
        <View style={[{ height: windowHeight }, isKeyboardVisible ? { height: windowHeight - keybordHeight } : {}]}>

            <View style={[{ height: windowHeight * 0.9 }, isKeyboardVisible ? { height: windowHeight * 0.9 - keybordHeight } : {}]}>
                {chat.length == 0 ?
                    (<Text>Mesajlar sayfadan çıkılınca silinir</Text>) :
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
            <View style={{ height: windowHeight * 0.1, backgroundColor: 'black', display: 'flex', flexDirection: 'row' }} >
                <TextInput
                    style={{ color: 'white', height: '100%', width: windowWidth * 0.8 }}
                    placeholder='Mesaj Giriniz'
                    placeholderTextColor={'white'}
                    onChangeText={(txt) => setText(txt)} value={text} />
                <TouchableOpacity
                    style={{ width: windowWidth * 0.2, justifyContent: 'center', alignItems: 'center' }}
                    onPress={handleSubmit}
                >
                    <Text style={{ color: 'white' }}>Gönder</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AiChat