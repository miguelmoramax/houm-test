import usePokemon from '../hooks/usePokemon'

const PokemonSearch = ({
  onSubmit,
  onSetType,
  onSetFilter,
  filter,
  selected,
}) => {
  const { types } = usePokemon()

  return (
    <div className="pokemon-search-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search pokemon"
          value={filter}
          onChange={onSetFilter}
        />

        <select value={selected} onChange={onSetType}>
          {types.map((type, i) => (
            <option key={i} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}

export default PokemonSearch
