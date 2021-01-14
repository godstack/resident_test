import { createSlice } from '@reduxjs/toolkit';
import { filtersData } from './filtersData';

const initialState = {
  filtersData,
  selectedFilter: ''
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedFilter: (state, action) => {
      state.selectedFilter = action.payload;
    }
  }
});

export default filtersSlice.reducer;

export const { setSelectedFilter } = filtersSlice.actions;
