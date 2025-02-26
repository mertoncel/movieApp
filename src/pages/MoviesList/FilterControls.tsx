import React from 'react';
import { Input, Select, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setYear, setType } from '../../store/filtersSlice';
import { RootState } from '../../store/store';
import { SearchType } from '../../types';

const { Option } = Select;

const FilterControls: React.FC = () => {
  const dispatch = useDispatch();
  const { search, type } = useSelector((state: RootState) => state.filters);

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <Input
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        placeholder="Search for a movie..."
        prefix={<SearchOutlined />}
        style={{ width: '60%', marginRight: '10px' }}
      />
      <Select
        value={type || undefined}
        onChange={(value) => dispatch(setType(value as SearchType))}
        style={{ width: '20%', marginRight: '10px' }}
        placeholder="All"
      >
        <Option value="">All</Option>
        <Option value="movie">Movies</Option>
        <Option value="series">TV Series</Option>
      </Select>
      <DatePicker
        onChange={(value) => dispatch(setYear(value?.year().toString() || ''))}
        picker="year"
        placeholder="Released"
      />
    </div>
  );
};

export default FilterControls;
