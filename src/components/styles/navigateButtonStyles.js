import { StyleSheet } from 'react-native';
import { sizeEnum } from '../../enums/sizeEnums';
import { themeColors } from '../../enums/colorEnums';
export const navigateButtonStyles = StyleSheet.create({
    button: {
        width: sizeEnum.screenWidth * 0.8,
        height: sizeEnum.screenWidth * 0.2,
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