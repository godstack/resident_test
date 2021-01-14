import React from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyles } from './GlobalStyles';
import { StyledApp } from './App.styled';
import { Header } from 'components/Header/Header.component';
import { toggleModal } from 'redux/slices/modalSlice/slice';

function App() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleModal({ name: '', isOpen: false }));
  };

  return (
    <StyledApp onClick={handleCloseModal}>
      <GlobalStyles />
      <Header />
      lol
    </StyledApp>
  );
}

export default App;
