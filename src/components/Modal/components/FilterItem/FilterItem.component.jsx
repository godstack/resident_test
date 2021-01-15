import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FilterName,
  FilterItemHeader,
  Icon,
  FilterItemBody
} from './FilterItem.styled';
import {
  ModalButtonsWrapper,
  ModalButton,
  ApplyButton
} from '../../Modal.styled';
import { selectInternalFilter } from '../../utilsFunctions';
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
          <ModalButtonsWrapper>
            {options?.map(item => (
              <ModalButton
                key={item.id}
                onClick={() =>
                  setInternalSelectedFilters(
                    selectInternalFilter(item, internalSelectedFilters)
                  )
                }
                isSelected={
                  !!internalSelectedFilters.find(
                    filter => filter.id === item.id
                  )
                }
              >
                {item.title}
              </ModalButton>
            ))}
          </ModalButtonsWrapper>
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
