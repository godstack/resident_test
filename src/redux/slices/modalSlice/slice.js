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

      if (isOpen === false) {
        state.name = '';
        state.isOpen = isOpen;
      } else if (state.name !== name) {
        state.name = name;
        state.isOpen = true;
      } else if (!isOpen && name) {
        state.isOpen = !state.isOpen;
        state.name = state.isOpen ? name : '';
      }
    }
  }
});

export default modalSlice.reducer;

export const { toggleModal } = modalSlice.actions;
