import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { StyledModal } from './Modal.styled';

export const Modal = ({ filterName }) => {
  const { isOpen, name } = useSelector(state => state.modal);

  if (!isOpen || filterName !== name) {
    return null;
  }

  return (
    <StyledModal>
      name {name}, filterName {filterName}
    </StyledModal>
  );
};

const MemoizedModal = memo(Modal);

export default MemoizedModal;
