import { useCallback, useRef } from 'react'
import usePokemon from '../hooks/usePokemon'
import PokemonCard from './PokemonCard'
import PokemonSearch from './PokemonSearch'
import '../styles/index.scss'

const PokeDex = () => {
  const {
    loading,
    selected,
    filter,
    setFilter,
    setSelected,
    types,
    setPage,
    pokemon,
  } = usePokemon()

  const onSetFilter = useCallback(
    (evt) => setFilter(evt.target.value),
    [setFilter]
  )

  const onSetType = useCallback(
    (evt) => setSelected(evt.target.value),
    [setSelected]
  )

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  const handleNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1)
  }, [setPage])

  const observer = useRef()

  const lastPokemonRef = useCallback(
    (node) => {
      let options = {
        rootMargin: '150px',
        threshold: 1.0,
      }
      if (loading) return
      if (observer.current) observer.current.disconnect()

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting === true) {
          handleNextPage()
        }
      }, options)
      if (node) observer.current.observe(node)
    },
    [handleNextPage, loading]
  )

  return (
    <>
      <PokemonSearch
        onSubmit={handleSubmit}
        onSetFilter={onSetFilter}
        onSetType={onSetType}
        filter={filter}
        types={types}
        selected={selected}
      />
      <div className="pokemons">
        {pokemon.map((p, index) => (
          <div key={index} ref={lastPokemonRef}>
            <PokemonCard {...p} />
          </div>
        ))}
      </div>
    </>
  )
}

export default PokeDex
