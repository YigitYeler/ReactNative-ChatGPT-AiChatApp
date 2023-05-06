import { PermissionsAndroid, Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob';
export const checkPermission = async (image_URL) => {

    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission

    if (Platform.OS === 'ios') {
        downloadImage(image_URL);
    } else {

        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: 'Storage Permission Required',
                message:
                    'App needs access to your storage to download Photos',
            }
        )
            .then(() => { downloadImage(image_URL) })
            .catch((err) => { console.log(err) })
    }
};

const getExtention = filename => {
    return /[.]/.exec(filename) ?
        /[^.]+$/.exec(filename) : undefined;
};

const downloadImage = (image_URL) => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
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