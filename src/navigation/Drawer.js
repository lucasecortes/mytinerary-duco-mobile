import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../Screens/HomeScreen';
import EventScreen from '../Screens/EventScreen';

const DrawerNavigation = createDrawerNavigator();

export default function drawer() {
  return (
    <DrawerNavigation.Navigator>
        <DrawerNavigation.Screen name='Home' component={HomeScreen} />
        <DrawerNavigation.Screen name='Home' component={EventScreen} />
    </DrawerNavigation.Navigator>
  )
}
