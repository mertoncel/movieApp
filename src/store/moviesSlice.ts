import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from '../services/config';
import { MovieResponse, MovieDetailed, Season } from '../types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseURIs.omdbApi }),
  endpoints: (builder) => ({
    getMovies: builder.query<
      MovieResponse,
      { search: string; type?: string; year?: string; page?: number }
    >({
      query: ({ search, type, year, page = 1 }) =>
        config.endpoints.movies.getMovies(search, type, year, page),
    }),
    getMovieDetails: builder.query<MovieDetailed, string>({
      query: (imdbID) => config.endpoints.movies.getMovieDetails(imdbID),
    }),
    getSeriesSeason: builder.query<Season, { imdbID: string; season: string }>({
      query: ({ imdbID, season = '1' }) =>
        config.endpoints.movies.getSeriesSeason(imdbID, season),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieDetailsQuery,
  useGetSeriesSeasonQuery,
} = moviesApi;
