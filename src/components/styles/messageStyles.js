import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { themeColors } from '../../enums/colorEnums';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const messageStyles = StyleSheet.create({
    main: {
        width: windowWidth,
        minHeight: windowHeight * 0.1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    message: {
        maxWidth: windowWidth * 0.7,
        minHeight: windowHeight * 0.05,
        backgroundColor: themeColors.primaryBlue,
        padding: windowWidth * 0.04,
        borderRadius: windowWidth * 0.03,
        marginHorizontal: windowWidth * 0.03,
    }
})