import { View, Text, TextInput, ActivityIndicator, Image, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { openai } from '../config/openAiConfig';
import { useHeaderHeight } from '@react-navigation/elements';
import { themeColors } from '../enums/colorEnums';
import EventButton from '../components/EventButton';
import { checkPermission } from '../events/downloadImgEvents';

const ImageGeneration = () => {
    const [text, setText] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const headerHeight = useHeaderHeight();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - headerHeight;

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            const response = await openai.createImage({
                prompt: text,
                n: 1,
                size: "1024x1024",
            });
            setImgUrl(response.data.data[0].url)
            setIsLoading(false)
        } catch (e) {
            alert("Something is going wrong, Please try again.");
        }
    };
    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            {isLoading ? (
                <View style={{ width: windowWidth, height: windowWidth, backgroundColor: '#bfbfbf', justifyContent: 'center', alignItems: 'center' }}>

                    <ActivityIndicator size="large" color={themeColors.primaryBlue} />
                </View>
            ) : (
                <Image
                    style={{ width: windowWidth, height: windowWidth }}
                    source={imgUrl ? { uri: imgUrl } : require('../../assets/grey-img.png')} />
            )}
            <TextInput
                style={{ textAlign: 'center', marginVertical: windowHeight * 0.06, color: 'black', width: windowWidth, borderBottomWidth: 2, borderColor: themeColors.primaryBlue }}
                onChangeText={(txt) => setText(txt)}
                value={text}
                placeholder='Enter the prompt'
                placeholderTextColor={'grey'} />

            <View style={{ marginBottom: windowHeight * 0.03, width: windowWidth, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <EventButton onPress={() => handleSubmit()} text={'Generate'} />
                {imgUrl == [] ? (<View style={{ display: 'none' }}></View>) : (<EventButton onPress={() => checkPermission(imgUrl)} text={'Download'} />)}

            </View>
        </ScrollView>
    )
}

export default ImageGeneration