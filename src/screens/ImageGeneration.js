import { View, Text, TextInput, TouchableOpacity, Image, Dimensions, PermissionsAndroid, Platform } from 'react-native'
import React, { useState } from 'react'
import { openai } from '../config/openAiConfig';
import { useHeaderHeight } from '@react-navigation/elements';
import RNFetchBlob from 'rn-fetch-blob';

const ImageGeneration = () => {
    const [text, setText] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const headerHeight = useHeaderHeight();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height - headerHeight;

    const checkPermission = async () => {

        // Function to check the platform
        // If iOS then start downloading
        // If Android then ask for permission

        if (Platform.OS === 'ios') {
            downloadImage();
        } else {

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission Required',
                    message:
                        'App needs access to your storage to download Photos',
                }
            )
                .then(() => { downloadImage() })
                .catch((err) => { console.log(err) })
        }
    };

    const getExtention = filename => {
        return /[.]/.exec(filename) ?
            /[^.]+$/.exec(filename) : undefined;
    };

    const downloadImage = () => {
        // Main function to download the image

        // To add the time suffix in filename
        let date = new Date();
        // Image URL which we want to download
        let image_URL = imgUrl;
        // Getting the extention of the file
        let ext = getExtention(image_URL);
        ext = '.' + ext[0];
        // Get config and fs from RNFetchBlob
        // config: To pass the downloading related options
        // fs: Directory path where we want our image to download
        const { config, fs } = RNFetchBlob;
        let PictureDir = fs.dirs.PictureDir;
        let options = {
            fileCache: true,
            addAndroidDownloads: {
                // Related to the Android only
                useDownloadManager: true,
                notification: true,
                path:
                    PictureDir +
                    '/image_' +
                    Math.floor(date.getTime() + date.getSeconds() / 2) +
                    '.png',
                description: 'Image',
            },
        };
        config(options)
            .fetch('GET', image_URL)
            .then(res => {
                // Showing alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('Image Downloaded Successfully.');
            })
            .catch((er) => {
                console.log(er)
            })
    };

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
            <TouchableOpacity
                onPress={checkPermission}
            >
                <Text>İndir</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImageGeneration