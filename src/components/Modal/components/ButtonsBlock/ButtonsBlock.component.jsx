import React from "react";
import { ModalButton, ModalButtonsWrapper } from "../../Modal.styled";

export const ButtonsBlock = ({
  buttonsArray,
  internalSelectedFilters,
  setInternalSelectedFilters,
}) => {
  const selectInternalFilter = (option, arr) => {
    let tempArr = [...arr];

    const isExist = !!tempArr.find((item) => item.id === option.id);

    if (isExist) {
      tempArr = tempArr.filter((item) => item.id !== option.id);
    } else {
      tempArr = [...tempArr, option];
    }

    return tempArr;
  };

  return (
    <ModalButtonsWrapper>
      {buttonsArray?.map((item) => (
        <ModalButton
          key={item.id}
          onClick={() =>
            setInternalSelectedFilters(
              selectInternalFilter(item, internalSelectedFilters)
            )
          }
          isSelected={
            !!internalSelectedFilters.find((filter) => filter.id === item.id)
          }
        >
          {item.title}
        </ModalButton>
      ))}
    </ModalButtonsWrapper>
  );
};
