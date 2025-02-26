import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Movie } from '../../types';
import { RootState } from '../../store/store';
import { setPage } from '../../store/filtersSlice';

const columns: TableProps<Movie>['columns'] = [
  {
    title: 'IMDB ID',
    dataIndex: 'imdbID',
    key: 'imdbID',
  },
  {
    title: 'Movie Name',
    dataIndex: 'Title',
    key: 'Title',
    render: (text: string, movie: Movie) => (
      <Link to={`${movie.Type}/${movie.imdbID}/`}>{text}</Link>
    ),
  },
  {
    title: 'Released',
    dataIndex: 'Year',
    key: 'Year',
  },
];

const MoviesTable: React.FC<{ data: Movie[]; totalResults: number }> = ({
  data,
  totalResults,
}) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.filters);

  return (
    <Table<Movie>
      columns={columns}
      dataSource={data}
      pagination={{
        current: page,
        total: totalResults,
        onChange: (page) => dispatch(setPage(page)),
        pageSize: 10,
        showSizeChanger: false,
        showTotal: (total) => `${total} titles in total`,
      }}
    />
  );
};

export default MoviesTable;
