import { combineReducers } from '@reduxjs/toolkit';
import filtersSlice from './slices/filtersSlice/slice';
import modalSlice from './slices/modalSlice/slice';

export const rootReducer = combineReducers({
  filters: filtersSlice,
  modal: modalSlice
});
