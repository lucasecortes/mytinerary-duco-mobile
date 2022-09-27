import React from 'react'
import { View, Text, Button } from 'react-native'

export default function HomeScreen() {
  return (
    <View>
      <Button
        onPress={() => navigation.goBack()} title="Go back home"
        />
        <Text>HomeScreen</Text>
    </View>
  )
}