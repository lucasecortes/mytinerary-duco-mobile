import { View, StyleSheet, TextInput } from 'react-native'
import StyledText from '../components/StyledText'
import Cities from '../components/Cities'
import theme from '../theme'
import { useSearchCitiesQuery } from '../features/citiesAPI'
import { useState } from 'react'

export default function CitiesScreen(){
  let [search, setSearch]=useState('')
  let {data: cities, isLoading, isSuccess} = useSearchCitiesQuery(search)
  if (isLoading) {
    cities=[]
  } else if (isSuccess) {
    cities=cities
  }

return (
    <View style={styles.container}>
      <StyledText fontWeight='bold' fontSize='title'>Cities</StyledText>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={newT=>setSearch(newT)}/>
      <Cities data={cities} id={cities._id}/>
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
  input: {
    width: '100%',
    backgroundColor: theme.colors.textPrimary,
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 12,
}
})