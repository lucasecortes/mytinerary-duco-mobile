import React from 'react'
import { View, Button, StyleSheet, Image } from 'react-native'
import StyledText from '../components/StyledText'
import theme from '../theme'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={{uri: 'https://i.imgur.com/OZpDvUU.png'}} style={styles.image}></Image>
        <StyledText fontSize='title' fontWeight='bold'>MyTinerary</StyledText>
        <StyledText textStyle='italic' align='center' color='primary' fontWeight='bold' fontSize='subheading'>Find your perfect trip, designed by insiders who know and love their cities!</StyledText>
        <Button
        onPress={() => navigation.navigate('Cities')}
        title="Find your next destination"/>
      </View>
      <View style={styles.container}>
        <StyledText color='textPrimary' fontSize='subheading' fontWeight='bold'>Popular MyTineraries</StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
  }
})