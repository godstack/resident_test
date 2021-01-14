import React from 'react';
import { useDispatch } from 'react-redux';
import { GlobalStyles } from './GlobalStyles';
import { Header } from 'components/Header/Header.component';
import { toggleModal } from 'redux/slices/modalSlice/slice';

function App() {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleModal({ name: '', isOpen: false }));
  };

  return (
    <div onClick={handleCloseModal}>
      <GlobalStyles />
      <Header />
      lol
    </div>
  );
}

export default App;
