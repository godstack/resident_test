import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { StyledMain, FiltersContainer, ClearButton } from './Main.styled';

import { SetOfFilters } from './components/SetOfFilters/SetOfFilters.component';
import { unselectAll } from 'redux/slices/filtersSlice/slice';

export const Main = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(state =>
    Object.entries(state.filters.selectedFilters)
  );

  const selectedCount = selectedFilters.reduce(
    (prev, curr) => prev + curr[1].length,
    0
  );

  return (
    <StyledMain>
      <span>Applied Filters: </span>
      {selectedCount ? (
        <FiltersContainer>
          {selectedFilters
            .filter(item => item[1].length)
            .map(filter => (
              <SetOfFilters key={filter[0]} set={filter} />
            ))}
          <ClearButton onClick={() => dispatch(unselectAll())}>
            Clear all
          </ClearButton>
        </FiltersContainer>
      ) : (
        <span>- none -</span>
      )}
    </StyledMain>
  );
};
