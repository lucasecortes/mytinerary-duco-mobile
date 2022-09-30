import React from 'react'
import { View, StyleSheet, ImageBackground } from 'react-native'
import theme from '../theme'
import StyledText from '../components/StyledText';
import { useGetCityQuery } from '../features/citiesAPI';
import Button from '../components/Button';

export default function Details(props) {
  let id
  props.route.params.id? id=props.route.params.id: id=props

  let {data:city, isLoading, isSuccess}=useGetCityQuery(id)
  if (isLoading) {
    city=[]
  } else if (isSuccess) {
    city=city.response
  }

  let newDate = new Date(city.founded);
  let year = newDate.getFullYear();

  return (
    <View style={ styles.container}>
      <ImageBackground source={{uri:city.photo}} style={styles.img}>
        <StyledText fontSize='h2' fontWeight='bold' align='center' style={styles.title}>
          Welcome to {city.city}
        </StyledText>
      </ImageBackground>
      <StyledText fontSize='subheading'>Country: {city.country}</StyledText>
      <StyledText fontSize='subheading'>City: {city.city}</StyledText>
      <StyledText fontSize='subheading'>Population: {city.population}</StyledText>
      <StyledText fontSize='subheading'>Founded: {year}</StyledText>
      <Button text='Back to cities'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      flex: 1,
      alignItems: 'center',
      backgroundColor: theme.colors.background
  },
  img: {
    maxHeight: 280,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    opacity: 0.9,
    marginBottom: 30,
  },
  title: {
    paddingHorizontal: 100,
  }
  });