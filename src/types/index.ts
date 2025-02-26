export type Movie = {
  Poster: string;
  Title: string;
  Type: SearchType;
  Year: string;
  imdbID: string;
};

export type SearchType = 'movie' | 'series' | 'episode';

export type MovieDetailed = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: SearchType;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  totalSeasons?: string;
};

export type Rating = {
  Source: string;
  Value: string;
};

export type MovieResponse = {
  Search: Movie[];
  totalResults: string;
  Response: 'True' | 'False';
};

export type Episode = {
  Title: string;
  Released: string;
  Episode: string;
  imdbRating: string;
  imdbID: string;
};

export type Season = {
  Title: string;
  Season: string;
  totalSeasons: string;
  Episodes: Episode[];
  Response: string;
};
