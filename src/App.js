import Loading from './components/Loading'
import PokeDex from './components/PokeDex'
import usePokemon from './hooks/usePokemon'

const App = () => {
  const { loading } = usePokemon()

  return <div>{loading ? <Loading /> : <PokeDex />}</div>
}

export default App
