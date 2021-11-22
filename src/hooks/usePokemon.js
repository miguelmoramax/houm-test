import { useState, useEffect, useMemo } from 'react'
import { getPokemonTypes, fetchPokemons } from '../services/'

const INITIAL_PAGE = 0
const usePokemon = () => {
  const [filter, setFilter] = useState('')
  const [allPokemon, setAllPokemon] = useState([])
  const [types, setTypes] = useState([])
  const [selected, setSelected] = useState('normal')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)

  const pokemon = useMemo(() => {
    const lcFilter = filter.toLowerCase()
    return allPokemon.filter((item) =>
      item.name.includes(lcFilter)
    )
  }, [filter, allPokemon])

  useEffect(() => {
    setLoading(true)
    fetchPokemons(10, page).then((data) => {
      setAllPokemon((prevPokemon) => prevPokemon.concat(data))
    })
    setLoading(false)
  }, [page, setLoading])

  useEffect(() => {
    setLoading(true)
    if (selected !== 'normal') {
      fetchPokemons(10, 0).then((data) => {
        const pokemonBytype = data.filter((pokemon) =>
          pokemon.types.map((i) => i.type.name).includes(selected)
        )
        setAllPokemon(pokemonBytype)
      })
    } 
    setLoading(false)
  }, [selected])

  useEffect(() => {
    getPokemonTypes().then((data) => {
      setTypes(data)
    })
  }, [types])

  return {
    pokemon,
    filter,
    setFilter,
    setAllPokemon,
    types,
    setTypes,
    selected,
    setSelected,
    loading,
    setPage,
    page,
  }
}

export default usePokemon
