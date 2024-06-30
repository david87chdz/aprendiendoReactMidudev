import { useState } from 'react'

import './App.css'

const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=1ad26af8&s='


function App() {
  

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
        Aqui irán los resultados
      </main>
    </div>
  )
}

export default App
