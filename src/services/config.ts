const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const config = {
  baseURIs: {
    omdbApi: 'https://www.omdbapi.com/',
  },
  endpoints: {
    movies: {
      getMovies: (search = 'Pokemon', type = 'movie', year = '', page = 1) =>
        `?apikey=${API_KEY}&s=${search}*&type=${type}&y=${year}&page=${page}`,
      getMovieDetails: (imdbID: string) => `?apikey=${API_KEY}&i=${imdbID}`,
      getSeriesSeason: (imdbID: string, season: string) =>
        `?apikey=${API_KEY}&i=${imdbID}&Season=${season}`,
    },
  },
};

export default config;
