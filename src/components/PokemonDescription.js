import { FaCheckCircle } from 'react-icons/fa'
import { Abilities } from '../hooks/usePokemon'
import './pokemonDescription.scss'

const PokemonDescription = (abilities) => {
  return (
    <div className="pokemon-card-details-info-container">
      <div className="pokemon-card-details">
        <div className="pokemon-card-details-info">
          <span>Abilities :</span>
          <span>Abilities :</span>
          <span>Abilities :</span>
          <span>Abilities :</span>
          <span>Abilities :</span>
          <span>Abilities :</span>
          <span>Abilities :</span>
          <span>Abilities :</span>
          {/* {abilities.map((item: any) => (
            <div key={item.ability.name}>
              <FaCheckCircle className="icons" /> {item.ability.name}
            </div>
          ))} */}
          {/* <span>Type(s):</span>
          {types.map((item: any) => (
            <div key={item.type.name}>
              <FaCheckCircle className="icons" /> {item.type.name}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}
export default PokemonDescription
