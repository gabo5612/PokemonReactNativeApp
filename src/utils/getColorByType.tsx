import { POKEMON_TYPE_COLORS } from "./PokemonColors";




const getColorByType= (type:string)=> POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByType