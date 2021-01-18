import React, { useState, useEffect, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedFilters } from 'redux/slices/filtersSlice/slice';
import { toggleModal } from 'redux/slices/modalSlice/slice';
import { StyledModal, ApplyButton, CancelButton } from './Modal.styled';
import { FilterItem } from './components/FilterItem/FilterItem.component';
import { ButtonsBlock } from './components/ButtonsBlock/ButtonsBlock.component';

const Modal = () => {
  const dispatch = useDispatch();

  const { isOpen, name, offsetLeft } = useSelector(state => state.modal);
  const { selectedFilters } = useSelector(state => state.filters);

  const [internalSelectedFilters, setInternalSelectedFilters] = useState(
    selectedFilters[name]
  );

  useEffect(() => {
    setInternalSelectedFilters(selectedFilters[name]);
  }, [selectedFilters, name]);

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
        {internalSelectedFilters && (
          <ButtonsBlock
            buttonsArray={filterItems}
            internalSelectedFilters={internalSelectedFilters}
            setInternalSelectedFilters={setInternalSelectedFilters}
          />
        )}

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
    <StyledModal onClick={e => e.stopPropagation()} offsetLeft={offsetLeft}>
      <h2>{name}</h2>
      {name === 'more filters' ? renderForMobile() : renderForDesktop()}
    </StyledModal>
  );
};

const MemoizedModal = memo(Modal);

export default MemoizedModal;
