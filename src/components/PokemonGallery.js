import { useState } from 'react'
import '../styles/slide.scss'

const PokemonGallery = (sprites) => {
  const [current, setCurrent] = useState(0)

  // convert object sprite to array and delete unused parts
  const data = Object.values(sprites)
    .filter((sprite) => sprite !== null)
    .slice(0, -2)

  if (!Array.isArray(data) || data.length <= 0) return null

  const moveDot = (index) => {
    if (index === current) {
      setCurrent(current === data.length - 1 ? 0 : current + 1)
    } else {
      setCurrent(current === 0 ? data.length - 1 : current - 1)
    }
    setCurrent(index)
  }

  return (
    <section className="slider">
      <div className="container-dots">
        {data.map((item, index) => (
          <div
            className={current === index ? 'dot active' : 'dot'}
            key={index}
            onClick={() => {
              moveDot(index)
            }}
          />
        ))}
      </div>
      {data.map((item, index) => (
        <div
          className={index === current ? 'slide active' : 'slide'}
          key={index}
        >
          {index === current && (
            <img src={item} alt={item.name} className="image" />
          )}
        </div>
      ))}
    </section>
  )
}

export default PokemonGallery
