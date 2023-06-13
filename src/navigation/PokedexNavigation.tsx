import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonScreen from "../screens/PokemonScreen";
export type PokedexStackParamList = {
  Pokedex: undefined;
  Pokemon: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<PokedexStackParamList>();

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  )
}

export default {PokedexNavigation}

