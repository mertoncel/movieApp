import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../store/moviesSlice';
import { RootState } from '../store/store';
import { setSearch, setPage } from '../store/filtersSlice';

const useMovies = () => {
  const dispatch = useDispatch();
  const { search, year, type, page } = useSelector(
    (state: RootState) => state.filters
  );

  const { data, error, isLoading } = useGetMoviesQuery({
    search,
    type,
    page,
    year,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearch(search));
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search, dispatch]);

  useEffect(() => {
    dispatch(setPage(1));
  }, [search, type, year, dispatch]);

  return { data, error, isLoading };
};

export default useMovies;
