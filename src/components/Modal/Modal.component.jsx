import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { StyledModal } from './Modal.styled';
import { StyledButton } from '../Header/Header.styled';

export const Modal = ({}) => {
  const { isOpen, name } = useSelector(state => state.modal);
  const filterItems = useSelector(state => {
    const entries = Object.entries(state.filters.filtersData);

    if (name) {
      const [, value] = entries.find(([key]) => key === name);
      return value;
    }

    return null;
  });

  if (!isOpen) {
    return null;
  }

  console.log(filterItems);
  return <StyledModal onClick={e => e.stopPropagation()}>{name}</StyledModal>;
};

const MemoizedModal = memo(Modal);

export default MemoizedModal;
