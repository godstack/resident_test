import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'redux/slices/modalSlice/slice';
import {
  StyledHeader,
  StyledButton,
  StyledButtonWrapper
} from './Header.styled';
import Modal from 'components/Modal/Modal.component';
import { setSelectedFilter } from 'redux/slices/filtersSlice/slice';

export const Header = () => {
  const { filtersData } = useSelector(state => state.filters);
  const { name } = useSelector(state => state.modal);

  const dispatch = useDispatch();

  const handleToggleModal = (e, { name, isOpen }) => {
    e.stopPropagation();

    dispatch(toggleModal({ name, isOpen }));
    dispatch(setSelectedFilter(name));
  };

  return (
    <>
      <StyledHeader>
        {Object.keys(filtersData).map(filterName => (
          <StyledButton
            key={filterName}
            onClick={e =>
              handleToggleModal(e, { name: filterName, isOpen: null })
            }
            isSelected={name === filterName}
          >
            {filterName}
          </StyledButton>
        ))}

        <StyledButton
          key='more filters'
          onClick={e =>
            handleToggleModal(e, { name: 'more filters', isOpen: null })
          }
          isSelected={name === 'more filters'}
        >
          More filters
        </StyledButton>
      </StyledHeader>
      <Modal />
    </>
  );
};
