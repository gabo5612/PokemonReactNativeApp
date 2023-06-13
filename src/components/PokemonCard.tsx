import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import getColorByType from "../utils/getColorByType";
import { useNavigation } from "@react-navigation/native";
import PokemonScreen from "../screens/PokemonScreen";
export default function PokemonCard(props:any) {
  const { pokemon } = props;
 const navigation=useNavigation()
  
  const pokemonColor= getColorByType(pokemon.type)
    const bgStyles ={backgroundColor:pokemonColor, ...styles.bgStyles}
    
  const goToPokemon = () => {
    console.log(`Vamos al pokemon: ${pokemon.id}`);
    navigation.navigate('PokemonScreens')
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <SafeAreaView style={styles.card}>
        <SafeAreaView style={styles.spacing}>
          <SafeAreaView style={bgStyles}>
            
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.image }} style={styles.image} />
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 140,
    
  },
  spacing: {
    flex: 1,
    padding: 5,

    
  },
  bgStyles: {
    flex:1,
    borderRadius:20,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    paddingTop: 3,
    textAlign:"center",
    textTransform:"capitalize",
  },
  image: {
    position: "absolute",
    bottom: 5,
    right:45,
    width: 100,
    height: 100,
  },
});