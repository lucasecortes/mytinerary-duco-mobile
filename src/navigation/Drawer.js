import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../Screens/HomeScreen';
import CityScreen from '../Screens/CityScreen';

const DrawerNavigation = createDrawerNavigator();

export default function drawer() {
  return (
    <DrawerNavigation.Navigator initialRouteName='Home'>
        <DrawerNavigation.Screen name='Home' component={HomeScreen} />
        <DrawerNavigation.Screen name='City' component={CityScreen} />
    </DrawerNavigation.Navigator>
  )
}
