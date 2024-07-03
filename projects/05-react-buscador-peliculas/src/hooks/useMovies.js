import { searchMovies } from '../../services/movies'

import { useState, useRef } from 'react'

export function useMovies( {search} ){
    const [ movies , setMovies ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    const previusSearch = useRef(search)
    const getMovies = async () => {
      if(search === previusSearch.current ) return
      setLoading(true)
      setError(null)
      try{
        //Actualizamos la ref con el valor actual de search
        previusSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      }catch(error){
        setError(error)
      } finally {
        // Se ejecuta tanto en el try como en el catch
        setLoading(false)
      }
    }
  
    return { movies: movies, getMovies , loading}
  }
