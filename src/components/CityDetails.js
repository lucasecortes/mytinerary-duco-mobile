import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Button from './Button'
import theme from '../theme'
import StyledText from './StyledText';

export default function CityDetails(props) {
  const cityDetails = props.data
  return (
    <View style={ styles.container}>
      <ScrollView
        style={{ height: 300, width: '100%' }}
        horizontal
        pagingEnabled>
        {cityDetails?.map((value) => (
          <View key={value._id}>
            {/* <ImageBackground
              source={{ uri: `${value.photo}` }} key={value._id}
            >
            </ImageBackground> */}
            <StyledText>Country: {value.country}</StyledText>
            <StyledText>City: {value.city}</StyledText>
            <StyledText>Population: {value.population}</StyledText>
            <StyledText>Founded: {value.founded}</StyledText>
          </View>
        ))}
      </ScrollView>
    </View>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Button onPress={() => navigation.navigate('Cities')} title="Go to cities" />
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      flex: 1,
      backgroundColor: theme.colors.background
  }
  });