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

  return (
    <View className='Cities-container'>
      <Text>Cities</Text>
      <TextInput className='Cities-input' type="search" placeholder='Search' ref={search} onChangeText={handleValue} />
      <View className='Cities-card-container'>
        {cities?.map(CityCard)}
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </View>
  )
}
