import { useState, useRef, useEffect} from 'react'

import { useMovies } from './hooks/useMovies'

import { Movies } from './components/Movies'
import './App.css'

//const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=1ad26af8&s='

function useSearch(){
  const [search, updateSearch] = useState('')
  const [ error, setError ] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search == ''
      return
    }

    if( search === '') {
      setError('No se puede buscar una película sin título')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con números')
      return
    }
    
    if (search.length < 3) {
      setError('Escribe al menos 3 caracteres')
      return
    }
    
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
 
  const { search, updateSearch, error } = useSearch() 
  const { movies, getMovies, loading } = useMovies( {search} )
  

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange= (event) => {
    updateSearch(event.target.value)
  }
 
  

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
      <form className='form' onSubmit={ handleSubmit }>
        <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars, The Matrix....' />
        <button type='submit'>Buscar</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }        
      </main>
    </div>
  )
}

export default App
