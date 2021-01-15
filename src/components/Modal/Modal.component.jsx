import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilters } from 'redux/slices/filtersSlice/slice';
import { toggleModal } from 'redux/slices/modalSlice/slice';
import {
  StyledModal,
  ModalButton,
  ModalButtonsWrapper,
  ApplyButton,
  CancelButton
} from './Modal.styled';
import { FilterItem } from './components/FilterItem/FilterItem.component';
import { selectInternalFilter } from './utilsFunctions';

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
    } else {
      return entries.slice(2);
    }
  });

  if (!isOpen) {
    return null;
  }

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
              onClick={() =>
                setInternalSelectedFilters(
                  selectInternalFilter(item, internalSelectedFilters)
                )
              }
              isSelected={
                !!internalSelectedFilters.find(filter => filter.id === item.id)
              }
            >
              {item.title}
            </ModalButton>
          ))}
        </ModalButtonsWrapper>

        <CancelButton onClick={() => dispatch(toggleModal({ isOpen: false }))}>
          Cancel
        </CancelButton>
        <ApplyButton
          onClick={() => handleApplyFilters(name, internalSelectedFilters)}
        >
          Apply
        </ApplyButton>
      </>
    );
  };

  const renderForMobile = () => {
    return (
      <div>
        {filterItems.map(([key, value]) => (
          <FilterItem
            key={key}
            filterName={key}
            options={value}
            selectedFilters={selectedFilters[key]}
          />
        ))}
      </div>
    );
  };

  return (
    <StyledModal onClick={e => e.stopPropagation()}>
      <h2>{name}</h2>
      {name === 'more filters' ? renderForMobile() : renderForDesktop()}
    </StyledModal>
  );
};

const MemoizedModal = memo(Modal);

export default MemoizedModal;
