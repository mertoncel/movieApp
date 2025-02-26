import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MoviesList from '../pages/MoviesList/MoviesList';
import MovieDetails from '../pages/MoviesDetails/MoviesDetails';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/movie/:imdbID" element={<MovieDetails />} />
        <Route path="/series/:imdbID" element={<MovieDetails />} />
        <Route path="/episode/:imdbID" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
