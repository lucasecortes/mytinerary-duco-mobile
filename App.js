import * as React from 'react';
import { Provider } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/features/store';
import HomeScreen from './src/Screens/HomeScreen';
import CityScreen from './src/Screens/CityScreen';
import SignIn from './src/Screens/SignIn';
import SignUp from './src/Screens/SignUp';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Cities" component={CityScreen} />
          <Drawer.Screen name='Sign In' component={SignIn} />
          <Drawer.Screen name='Sign Up' component={SignUp} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>
  );
}