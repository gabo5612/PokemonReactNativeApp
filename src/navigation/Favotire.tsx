import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FavotireScreen from '../screens/FavoriteScreen'
import PokemonScreen from '../screens/PokemonScreen'
const Stack=createNativeStackNavigator()
const Favorite = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Favorito" component={FavotireScreen}
        options={{
            title:'Favorito',
        }}/>
      <Stack.Screen name="PokemonScreens" component={PokemonScreen} />

    </Stack.Navigator>
  )
}

export default {Favorite}
