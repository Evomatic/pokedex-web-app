export async function listPokemonOptions(): Promise<any[]> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')
  return response.json()
}
