import styled from 'styled-components';
import NegativeIcon from 'assets/icons/negative.png';
import PlusIcon from 'assets/icons/plus.png';

export const StyledFilterItem = styled.div`
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const FilterItemHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterName = styled.div`
  font-size: 1.5rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${({ isOpen }) => (isOpen ? NegativeIcon : PlusIcon)});
  background-size: cover;
  cursor: pointer;
`;

export const FilterItemBody = styled.section`
  position: relative;
  padding: 20px 20px 80px 20px;
`;
