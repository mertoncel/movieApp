import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    search: 'pokemon',
    year: '',
    type: '',
    page: 1,
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setSearch, setYear, setType, setPage } = filtersSlice.actions;
export default filtersSlice.reducer;
