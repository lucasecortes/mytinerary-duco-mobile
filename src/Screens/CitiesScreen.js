import { View, StyleSheet } from 'react-native'
import StyledText from '../components/StyledText'
import Cities from '../components/Cities'
import theme from '../theme'
import Input from '../components/Input'
import { useGetAllCitiesQuery } from '../features/citiesAPI'

export default function CitiesScreen(){
  let {data: cities} = useGetAllCitiesQuery()

return (
    <View style={styles.container}>
      <StyledText fontWeight='bold' fontSize='title'>Cities</StyledText>
      <Input/>
      <Cities data={cities}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 50
  },
})