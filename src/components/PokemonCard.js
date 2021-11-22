import PokemonGallery from './PokemonGallery'
import { FaCheckCircle } from 'react-icons/fa'
import '../styles/index.scss'
import '../styles/pokemonDescription.scss'


const PokemonCard = ({
  name,
  id,
  sprites,
  abilities,
  types,
}) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card-data">
        <div className="pokemon-card-image">
          <img src={sprites.front_default} alt={name} />
        </div>
        <div className="pokemon-card-text">
          <span>{name}</span>
          <span># {id}</span>
        </div>
      </div>

      {/* Gallery */}
      <div className="pokemon-gallery-container">
        <PokemonGallery {...sprites} />
      </div>

      {/* Description */}
      <div className="pokemon-card-details-info">
        <div className="pokemon-card-details-info-container">
          <div className="pokemon-card-details">
            <div className="pokemon-card-details-info">
              <span>Abilities :</span>
              {abilities.map((item) => (
                <div key={item.ability.name}>
                  <FaCheckCircle className="icons" /> {item.ability.name}
                </div>
              ))}
              <span>Type(s):</span>
              {types.map((item) => (
                <div key={item.type.name}>
                  <FaCheckCircle className="icons" /> {item.type.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
