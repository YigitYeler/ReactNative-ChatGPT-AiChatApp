import { View, Text, TextInput, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { openai } from '../config/openAiConfig';
import { useHeaderHeight } from '@react-navigation/elements';

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
            console.log(response.data.data[0].url)
            setImgUrl(response.data.data[0].url)
            setIsLoading(false)
        } catch (e) {
            console.log("Something is going wrong, Please try again.", e);
        }
    };
    return (
        <View>
            <TextInput onChangeText={(txt) => setText(txt)} value={text} placeholder='Prompt giriniz' />
            <TouchableOpacity
                onPress={handleSubmit}
            >
                <Text>Oluştur</Text>
            </TouchableOpacity>
            {isLoading ? (<Text>Görüntü Yükleniyor...</Text>) : (<Image style={{ width: windowWidth, height: windowWidth }} source={imgUrl ? { uri: imgUrl } : { uri: 'https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/5bf41cca049f03cdc7e842db2201172d6cc1a6b173e8db293a3b880ecc5836561616582409012.jpg' }} />)}

        </View>
    )
}

export default ImageGeneration