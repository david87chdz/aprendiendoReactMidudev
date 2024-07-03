export const searchMovies = async ({ search }) =>{
    if (search === '') return null

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=1ad26af8&s=${search}`)
        const data = await response.json()
        const movies = data.Search

        return movies.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title, 
            year: movie.Year,
            poster: movie.Poster
          }))
    }catch(error){
        throw new Error('Error searching movies')
    }
}