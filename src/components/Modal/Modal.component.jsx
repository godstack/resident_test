import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilters } from 'redux/slices/filtersSlice/slice';
import { toggleModal } from 'redux/slices/modalSlice/slice';
import {
  StyledModal,
  ModalButton,
  ModalButtonsWrapper,
  ApplyButton
} from './Modal.styled';

const Modal = ({ isOpen, name, selectedFilters }) => {
  const dispatch = useDispatch();
  const [internalSelectedFilters, setInternalSelectedFilters] = useState(
    selectedFilters[name]
  );

  const filterItems = useSelector(state => {
    const entries = Object.entries(state.filters.filtersData);

    if (name !== 'more filters' && name) {
      const [, value] = entries.find(([key]) => key === name);
      return value;
    }

    return null;
  });

  if (!isOpen) {
    return null;
  }

  const selectInternalFilter = option => {
    let tempArr = [...internalSelectedFilters];

    const isExist = !!tempArr.find(item => item.id === option.id);

    if (isExist) {
      tempArr = tempArr.filter(item => item.id !== option.id);
    } else {
      tempArr = [...tempArr, option];
    }

    setInternalSelectedFilters(tempArr);
  };

  const handleApplyFilters = (filterName, filters) => {
    dispatch(setSelectedFilters({ filterName, filters }));
    dispatch(toggleModal({ isOpen: false }));
  };

  const renderForDesktop = () => {
    return (
      <>
        <ModalButtonsWrapper>
          {filterItems?.map(item => (
            <ModalButton
              key={item.id}
              onClick={() => selectInternalFilter(item)}
              isSelected={
                !!internalSelectedFilters.find(filter => filter.id === item.id)
              }
            >
              {item.title}
            </ModalButton>
          ))}
        </ModalButtonsWrapper>

        <ApplyButton
          onClick={() => handleApplyFilters(name, internalSelectedFilters)}
        >
          Apply
        </ApplyButton>
      </>
    );
  };

  return (
    <StyledModal onClick={e => e.stopPropagation()}>
      <h2>{name}</h2>
      {name === 'more filters' ? null : renderForDesktop()}
    </StyledModal>
  );
};

const MemoizedModal = memo(Modal);

export default MemoizedModal;
