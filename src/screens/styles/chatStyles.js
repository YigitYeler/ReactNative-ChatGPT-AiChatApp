import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { themeColors } from '../../enums/colorEnums';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const chatStyles = StyleSheet.create({
    main: {
        flex: 1
    },
    flatListView: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: windowWidth * 0.03
    },
    bottomView: {
        height: windowHeight * 0.1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    textInput: {
        color: 'black',
        height: '100%',
        width: windowWidth * 0.8,
        padding: windowWidth * 0.05
    },
    sendButton: {
        backgroundColor: themeColors.primaryBlue,
        width: windowWidth * 0.17,
        height: windowWidth * 0.17,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: windowWidth * 0.5
    }

})