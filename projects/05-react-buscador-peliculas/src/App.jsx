import { useState } from 'react'

import { useMovies } from './hooks/useMovies'

import { Movies } from './components/Movies'

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=1ad26af8&s='



function App() {

  const { movies } = useMovies()
  
  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
      <form className='form'>
        <input type="text" placeholder='Avengers, Star Wars, The Matrix....' />
        <button type='submit'>Buscar</button>
      </form>
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
