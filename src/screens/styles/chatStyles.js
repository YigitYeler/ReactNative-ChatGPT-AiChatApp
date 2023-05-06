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
        backgroundColor:
            themeColors.backgroundBlack,
        paddingBottom: windowWidth * 0.03
    },
    bottomView: {
        height: windowHeight * 0.1,
        backgroundColor: themeColors.backgroundBlack,
        flexDirection: 'row'
    },
    textInput: {
        color: 'white',
        height: '100%',
        width: windowWidth * 0.8
    },
    sendButton: {
        backgroundColor: themeColors.primaryBlue,
        width: windowWidth * 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    }

})