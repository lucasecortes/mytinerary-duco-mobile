import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import CityScreen from './src/Screens/CityScreen';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cities" component={CityScreen} />
        <Drawer.Screen name='SignIn' component={SignIn} />
        <Drawer.Screen name='SignUp' component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}