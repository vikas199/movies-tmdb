const API_KEY= process.env.REACT_APP_API_KEY

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComdeyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWestrenMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}