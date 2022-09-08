import 'react-native-gesture-handler';
import * as React from 'react';
 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'
 
const Stack = createStackNavigator();
const MoviesTabNavigator = createBottomTabNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Rechercher" component={Search}/>
        <Stack.Screen name="FilmDetail" component={FilmDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default function Fav() {
  return (
    <NavigationContainer>
      <MoviesTabNavigator.Navigator>
        <MoviesTabNavigator.Screen name="Rechercher" component={Search} />
        <MoviesTabNavigator.Screen name="Favorites" component={Favorites} />
      </MoviesTabNavigator.Navigator>
    </NavigationContainer>
  )
}