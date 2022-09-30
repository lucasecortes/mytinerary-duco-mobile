import { useRef, useState } from 'react'
import { View, Button, Text, TextInput } from 'react-native'
import CityCard from '../components/CityCard'
import { useSearchCitiesQuery } from '../features/citiesAPI'

export default function CityScreen({ navigation }) {
  const [searching, setSearching] = useState()
  const search = useRef("")
  const handleValue = () => {
    setSearching(search.current.value)
  }

  let { data: cities } = useSearchCitiesQuery(search.current ? search.current.value : "")
console.log(data);
  return (
    <View>
      <Text>Cities</Text>
      <TextInput type="search" placeholder='Search' ref={search} onChangeText={handleValue} />
      <Text data={cities}>
        
        {/* {cities?.map(CityCard)} */}
      </Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}
