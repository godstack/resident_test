import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FilterName,
  FilterItemHeader,
  Icon,
  FilterItemBody
} from './FilterItem.styled';
import { ApplyButton } from '../../Modal.styled';
import { ButtonsBlock } from '../ButtonsBlock/ButtonsBlock.component';
import { setSelectedFilters } from 'redux/slices/filtersSlice/slice';

export const FilterItem = ({ filterName, options, selectedFilters }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelectedFilters, setInternalSelectedFilters] = useState(
    selectedFilters
  );

  const handleApplyFilters = (filterName, filters) => {
    dispatch(setSelectedFilters({ filterName, filters }));
    setIsOpen(false);
  };

  return (
    <div>
      <FilterItemHeader>
        <FilterName>
          {filterName}{' '}
          {!!internalSelectedFilters.length &&
            `(${internalSelectedFilters.length})`}
        </FilterName>
        <Icon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </FilterItemHeader>

      {isOpen && (
        <FilterItemBody>
          <ButtonsBlock
            buttonsArray={options}
            internalSelectedFilters={internalSelectedFilters}
            setInternalSelectedFilters={setInternalSelectedFilters}
          />

          <ApplyButton
            onClick={() =>
              handleApplyFilters(filterName, internalSelectedFilters)
            }
          >
            Apply
          </ApplyButton>
        </FilterItemBody>
      )}
    </div>
  );
};
