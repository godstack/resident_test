import React from 'react';
import { ModalButton, ModalButtonsWrapper } from '../../Modal.styled';
import { selectInternalFilter } from '../../utilsFunctions';

export const ButtonsBlock = ({
  buttonsArray,
  internalSelectedFilters,
  setInternalSelectedFilters
}) => {
  return (
    <ModalButtonsWrapper>
      {buttonsArray?.map(item => (
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
  );
};
