import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const chatStyles = StyleSheet.create({
    main: {
        width: windowWidth,
        flex: 0.92
    },
})