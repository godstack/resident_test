import React from 'react';
import { SelectedFilterItem } from '../SelectedFilterItem/SelectedFilterItem.component';

export const SetOfFilters = ({ set }) => {
  return (
    <>
      {set[1].map(item => (
        <SelectedFilterItem key={item.id} item={item} groupName={set[0]} />
      ))}
    </>
  );
};
