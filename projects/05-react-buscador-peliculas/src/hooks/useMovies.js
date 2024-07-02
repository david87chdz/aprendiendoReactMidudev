import apiPeliculas from '../mocks/with-results.json'

export function useMovies(){
    const peliculas = apiPeliculas.Search  
  
    const mappedMovies = peliculas?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title, 
      year: movie.Year,
      poster: movie.Poster
    }))
  
    return { movies: mappedMovies }
  }