import { StyleSheet } from 'react-native';
import { sizeEnum } from '../../enums/sizeEnums';
import { themeColors } from '../../enums/colorEnums';
export const homeStyles = StyleSheet.create({
    main: {
        width: sizeEnum.screenWidth,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: themeColors.backgroundBlack
    },
    buttonView: {
        width: sizeEnum.screenWidth,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    text: {
        color: 'white',
        fontSize: sizeEnum.screenWidth * 0.1,
        fontWeight: 'bold'
    }
})