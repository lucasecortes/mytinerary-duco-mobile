import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledText from './StyledText'
import theme from '../theme'
import Button from './Button'

export default function Hero() {
    const backgroundImage = {uri: 'https://i.imgur.com/dT5RYmU.jpg'}

    return (
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
            <SafeAreaView style={styles.container}>
                <Image source={{uri: 'https://i.imgur.com/OZpDvUU.png'}} style={styles.image}></Image>
                <StyledText fontSize='title' fontWeight='bold'>MyTinerary</StyledText>
                <StyledText textStyle='italic' align='center' color='primary' fontWeight='bold' fontSize='subheading'>Find your perfect trip, designed by insiders who know and love their cities!</StyledText>
                <Button text='Find your next destination'/>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: 15,
        paddingHorizontal: 30,
        backgroundColor: theme.colors.background
      },
      image: {
        width: 200,
        height: 200,
      },
      backgroundImage: {
        opacity: 0.9,
        height: 400
      }
})