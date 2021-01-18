import React from 'react';
import { useDispatch } from 'react-redux';
import { ItemWrapper, SvgDiv } from './SelectedFilterItem.styled';
import CloseIcon from 'assets/icons/close.svg';
import { unselectFilter } from 'redux/slices/filtersSlice/slice';

export const SelectedFilterItem = ({ item, groupName }) => {
  const dispatch = useDispatch();
  return (
    <ItemWrapper groupName={groupName}>
      {item.title}{' '}
      <SvgDiv
        svg={CloseIcon}
        onClick={() =>
          dispatch(unselectFilter({ filterName: groupName, deleteId: item.id }))
        }
      />
    </ItemWrapper>
  );
};
