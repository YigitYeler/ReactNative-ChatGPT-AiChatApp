import { StyleSheet } from 'react-native';
import { sizeEnum } from '../../enums/sizeEnums';
import { themeColors } from '../../enums/colorEnums';
export const eventButtonStyles = StyleSheet.create({
    button: {
        width: sizeEnum.screenWidth * 0.3,
        height: sizeEnum.screenWidth * 0.2,
        backgroundColor: themeColors.primaryBlue,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizeEnum.screenWidth * 0.4 * 0.15
    },
    text: {
        color: 'white',
        fontSize: sizeEnum.screenWidth * 0.05,
        fontWeight: 'bold'
    }
})