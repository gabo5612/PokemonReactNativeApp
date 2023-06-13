const API_HOST:string="https://pokeapi.co/api/v2";

export async function getPokemonsApi(endpoint) {
  console.log(endpoint)
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpoint || url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}