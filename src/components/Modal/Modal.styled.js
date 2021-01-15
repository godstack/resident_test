import styled from 'styled-components';

const buttonColor = 'hsl(210, 80%, 42%)';

export const StyledModal = styled.section`
  position: absolute;
  top: 70px;
  left: 2.5%;
  padding: 20px 20px 100px;
  width: 95%;
  border: 0.125rem solid black;

  @media (min-width: 900px) {
    top: 83px;
  }
`;

export const ModalButton = styled.button`
  position: relative;
  padding: 3px 15px;
  background-color: ${({ isSelected }) => (isSelected ? buttonColor : 'white')};
  border: 0.125rem solid
    ${({ isSelected }) => (isSelected ? 'white' : buttonColor)};
  font-size: 1rem;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  font-size: bold;
  transition: all 0.1s ease;

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: all 0.125s ease-in-out;
    width: 100%;
    height: 100%;
  }

  &:after {
    border: 0.125rem dashed ${buttonColor};
    top: 0;
    left: 0;
    z-index: -1;
  }

  &:hover::after,
  &:focus::after {
    left: 10px;
    top: 5px;
  }

  &:hover {
    background-color: ${buttonColor};
    color: white;
  }

  @media (min-width: 900px) {
    font-size: 1.3rem;
    padding: 5px 15px;
    margin: 10px;
  }
`;

export const ModalButtonsWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const ApplyButton = styled(ModalButton)`
  position: absolute;
  color: green;
  border: 0.125rem solid black;
  text-transform: uppercase;

  &:hover {
    background-color: yellowgreen;
    color: white;
  }

  &:after {
    border: 0.125rem dashed yellowgreen;
  }

  right: 20px;
  bottom: 20px;
`;
