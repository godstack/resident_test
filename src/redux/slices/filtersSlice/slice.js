import { createSlice } from '@reduxjs/toolkit';
import { filtersData } from './filtersData';

const initialState = {
  filtersData,
  selectedFilters: defaultSelectedFilters()
};

function defaultSelectedFilters() {
  let result = {};

  for (const key of Object.keys(filtersData)) {
    result[key] = [];
  }

  return result;
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSelectedFilters: (state, action) => {
      const { filterName, filters } = action.payload;

      state.selectedFilters[filterName] = filters;
    }
  }
});

export default filtersSlice.reducer;

export const { setSelectedFilters } = filtersSlice.actions;
