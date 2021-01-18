import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from 'redux/slices/modalSlice/slice';
import {
  StyledHeader,
  StyledButton,
  StyledLogo,
  LogoWrapper
} from './Header.styled';
import LogoIcon from 'assets/icons/shopping-cart.svg';
import Modal from 'components/Modal/Modal.component';

export const Header = () => {
  const { filtersData, selectedFilters } = useSelector(state => state.filters);
  const { name, isOpen } = useSelector(state => state.modal);

  const dispatch = useDispatch();

  const handleToggleModal = (e, { name, isOpen }) => {
    e.stopPropagation();

    dispatch(toggleModal({ name, isOpen, offsetLeft: e.target.offsetLeft }));
  };

  const handleCloseModalOnResize = () => {
    dispatch(toggleModal({ isOpen: false }));
  };

  useEffect(() => {
    window.addEventListener('resize', handleCloseModalOnResize);

    return () => window.removeEventListener('resize', handleCloseModalOnResize);
  }, []);

  return (
    <>
      <LogoWrapper>
        <StyledLogo svg={LogoIcon} />
      </LogoWrapper>

      <StyledHeader>
        {Object.keys(filtersData).map(filterName => (
          <StyledButton
            key={filterName}
            onClick={e => handleToggleModal(e, { name: filterName })}
            isSelected={name === filterName}
          >
            {filterName}{' '}
            {!!selectedFilters[filterName].length && (
              <span>({selectedFilters[filterName].length})</span>
            )}
          </StyledButton>
        ))}

        {name && isOpen && (
          <Modal
            selectedFilters={selectedFilters}
            name={name}
            isOpen={isOpen}
          />
        )}

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
    </>
  );
};
