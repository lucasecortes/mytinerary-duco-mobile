import React from 'react'
import { View, Text } from 'react-native'

export default function EventScreen() {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('City')}
        title="Go to city"
        />
        <Text>EventScreen</Text>
    </View>
  )
}
