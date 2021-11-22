const API_URL = 'https://pokeapi.co/api/v2/pokemon/'

export const getPokemons = async (limit, page) => {
  try {
    const response = await fetch(
      `${API_URL}?limit=${limit}&offset=${limit * page}`
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const fetchPokemons = async (limit, page) => {
  try {
    const data = await getPokemons(limit, page)
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url)
    })
    const results = await Promise.all(promises)
    return results
  } catch (error) {}
}

export const searchPokemon = async (name) => {
  try {
    const response = await fetch(`${API_URL}${name}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getPokemonTypes = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type')
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}
