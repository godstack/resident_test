import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  name: ''
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      const { name, isOpen } = action.payload;
      debugger;
      if (name === '') {
        state.name = name;
        state.isOpen = isOpen;
      } else if (state.name !== name) {
        state.name = name;
        state.isOpen = true;
      } else if (isOpen === null) {
        state.isOpen = !state.isOpen;
      } else {
        state.isOpen = isOpen;
      }
    }
  }
});

export default modalSlice.reducer;

export const { toggleModal } = modalSlice.actions;
