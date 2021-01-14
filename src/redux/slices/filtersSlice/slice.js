import { createSlice } from '@reduxjs/toolkit';
import { filtersData } from './filtersData';

const initialState = {
  filtersData
};

const FiltersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {}
});

export default FiltersSlice.reducer;
