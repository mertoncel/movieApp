import React from 'react';
import { Alert } from 'antd';
import useMovies from '../../hooks/useMovies';
import FilterControls from './FilterControls';
import CustomSpin from '../../components/CustomSpin';
import MoviesTable from './MoviesTable';

const MoviesList: React.FC = () => {
  const { data, error, isLoading } = useMovies();

  if (isLoading) return <CustomSpin />;
  if (error)
    return (
      <Alert
        message="Error"
        description="Error fetching movies"
        type="error"
        showIcon
      />
    );

  return (
    <>
      <FilterControls />
      <MoviesTable
        data={data?.Search || []}
        totalResults={data?.totalResults ? parseInt(data.totalResults, 10) : 0}
      />
    </>
  );
};

export default MoviesList;
