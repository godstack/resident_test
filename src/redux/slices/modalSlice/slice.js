import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  name: '',
  offsetLeft: null
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      const { name, isOpen, offsetLeft } = action.payload;

      if (isOpen === false) {
        state.name = '';
        state.isOpen = isOpen;
        state.offsetLeft = null;
      } else if (state.name !== name) {
        state.name = name;
        state.isOpen = true;
        state.offsetLeft = offsetLeft;
      } else if (!isOpen && name) {
        state.isOpen = !state.isOpen;
        state.name = state.isOpen ? name : '';
        state.offsetLeft = state.isOpen ? offsetLeft : null;
      }
    }
  }
});

export default modalSlice.reducer;

export const { toggleModal } = modalSlice.actions;
