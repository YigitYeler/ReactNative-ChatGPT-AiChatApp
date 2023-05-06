import { View, Text } from 'react-native'
import React from 'react'
import { homeStyles } from './styles/homeStyles'
import { sizeEnum } from '../enums/sizeEnums'
import { useHeaderHeight } from '@react-navigation/elements';
import NavigateButton from '../components/NavigateButton';
import LinearGradient from 'react-native-linear-gradient';
import { themeColors } from '../enums/colorEnums';
const Home = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={[homeStyles.main, { height: sizeEnum.screenHeight - headerHeight }]}>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#5454ff', "#30c8ff"]}
                style={homeStyles.logoView}>
                <Text style={homeStyles.text}>AI WORLD</Text>
            </LinearGradient>
            <View style={homeStyles.buttonView}>
                <NavigateButton onPress={() => navigation.navigate('AiChat')} text={'Ai Chat'} />
                <NavigateButton onPress={() => navigation.navigate('ImageGeneration')} text={'Ai Image Generation'} />
            </View>
        </View>
    )
}

export default Home