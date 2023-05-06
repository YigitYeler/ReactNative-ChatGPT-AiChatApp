import { StyleSheet } from 'react-native';
import { sizeEnum } from '../../enums/sizeEnums';
import { themeColors } from '../../enums/colorEnums';
export const homeStyles = StyleSheet.create({
    main: {
        width: sizeEnum.screenWidth,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    buttonView: {
        width: sizeEnum.screenWidth,
        height: sizeEnum.screenHeight * 0.5,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: sizeEnum.screenWidth * 0.1,
        fontWeight: 'bold'
    },
    logoView: {
        width: sizeEnum.screenWidth,
        height: sizeEnum.screenHeight * 0.5,
        backgroundColor: themeColors.primaryBlue,
        borderBottomLeftRadius: sizeEnum.screenWidth * 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    }
})