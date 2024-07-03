import { useState, useRef, useEffect, useCallback} from 'react'

import { useMovies } from './hooks/useMovies'

import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'

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
  const [ sort, setSort ] = useState(false)
  const { search, updateSearch, error } = useSearch() 
  const { movies, getMovies, loading } = useMovies( {search, sort} )
  

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 1000)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
 
  const handleSort = () =>{
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
      <form className='form' onSubmit={ handleSubmit }>
        <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, Star Wars, The Matrix....' />
        <input type="checkbox" onChange={handleSort} checked={sort} />
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
