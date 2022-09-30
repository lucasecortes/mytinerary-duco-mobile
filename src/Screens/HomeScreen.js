import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Hero from '../components/Hero'
import StyledText from '../components/StyledText'
import theme from '../theme'
import { useGetAllCitiesQuery } from '../features/citiesAPI'
import Carousel from '../components/Carousel'


export default function HomeScreen() {
  let {data: cities} = useGetAllCitiesQuery()

  return (
        <ScrollView>
          <Hero/>
          <View style={styles.container}>
            <StyledText style={{padding:23}} fontWeight='bold' fontSize='h2'>Popular MyTineraries</StyledText>
            <Carousel data={cities}/>
          </View>
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    opacity: 0.2,
  },
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
})