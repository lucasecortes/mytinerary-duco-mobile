import React from 'react';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/features/store';
import HomeScreen from './src/Screens/HomeScreen';
import CitiesScreen from './src/Screens/CitiesScreen';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';
import { StatusBar } from 'react-native';
import Details from './src/Screens/Details';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style='light'/>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#061116',
          },
          headerTintColor: '#fff'
        }}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cities" component={CitiesScreen} />
          <Drawer.Screen name="Details" component={Details} />
          <Drawer.Screen name='Sign In' component={SignIn} />
          <Drawer.Screen name='Sign Up' component={SignUp} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}