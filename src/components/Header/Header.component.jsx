import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'redux/slices/modalSlice/slice';
import { StyledHeader, StyledButton, StyledButtonMore } from './Header.styled';
import Modal from 'components/Modal/Modal.component';

export const Header = () => {
  const { filtersData } = useSelector(state => state.filters);
  const { isOpen } = useSelector(state => state.modal);
  console.log(isOpen);
  const dispatch = useDispatch();

  const handleToggleModal = (e, { name, isOpen }) => {
    e.stopPropagation();

    dispatch(toggleModal({ name, isOpen }));
  };

  return (
    <StyledHeader>
      {Object.keys(filtersData).map(filterName => (
        <div>
          <StyledButton
            key={filterName}
            onClick={e =>
              handleToggleModal(e, { name: filterName, isOpen: null })
            }
          >
            {filterName}
          </StyledButton>
          <Modal filterName={filterName} />
        </div>
      ))}

      <div>
        <StyledButtonMore
          onClick={e =>
            handleToggleModal(e, { name: 'more filters', isOpen: null })
          }
        >
          More filters
        </StyledButtonMore>
        <Modal filterName={'more filters'} />
      </div>
    </StyledHeader>
  );
};
