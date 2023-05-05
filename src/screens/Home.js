import { View, Text } from 'react-native'
import React from 'react'
import { homeStyles } from './styles/homeStyles'
import { sizeEnum } from '../enums/sizeEnums'
import { useHeaderHeight } from '@react-navigation/elements';
import NavigateButton from '../components/NavigateButton';
const Home = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={[homeStyles.main, { height: sizeEnum.screenHeight - headerHeight }]}>
            <View>
                <Text style={homeStyles.text}>AI WORLD</Text>
            </View>
            <View style={homeStyles.buttonView}>
                <NavigateButton onPress={() => navigation.navigate('AiChat')} text={'Ai Chat'} />
                <NavigateButton onPress={() => navigation.navigate('ImageGeneration')} text={'Ai Image Generation'} />
            </View>
        </View>
    )
}

export default Home