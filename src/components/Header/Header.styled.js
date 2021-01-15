import styled from 'styled-components';

const borderSize = '0.125rem';
const duration = '250ms';
const ease = 'cubic-bezier(0.215, 0.61, 0.355, 1)';
const fontFamily = 'monospace';
const colorPrimary = 'white';
const colorSecondary = 'black';
const shadow = 'rgba(0, 0, 0, 0.1)';
const space = '1rem';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: ${borderSize} solid black;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  margin: 10px;
  padding: calc(${space} / 1.125) ${space}, ${space};
  border: ${borderSize} solid black;
  color: ${({ isSelected }) => (isSelected ? colorPrimary : colorSecondary)};
  background-color: ${({ isSelected }) =>
    isSelected ? colorSecondary : colorPrimary};
  font-size: 1rem;
  font-family: ${fontFamily};
  text-transform: lowercase;
  text-shadow: ${shadow} 2px 2px;
  transition: flex-grow ${duration} ${ease};
  flex-grow: 1;

  &::after {
    content: '';
    display: ${({ isSelected }) => (isSelected ? 'block' : 'none')};
    left: calc(50% - 20px);
    bottom: -35px;
    width: 0;
    height: 0;
    position: absolute;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid black;
  }

  &:hover,
  :focus {
    /* flex-grow: 1.5; */
    color: ${colorPrimary};
    outline: none;
    text-shadow: none;
    background-color: ${colorSecondary};
  }

  &:focus {
    outline: ${borderSize} dashed ${colorPrimary};
    outline-offset: calc(${borderSize} * -3);
  }

  &:nth-child(n + 3) {
    display: none;
  }

  &:last-child {
    display: block;
  }

  @media (min-width: 900px) {
    position: relative;
    font-size: 1.3rem;

    &:nth-child(n + 3) {
      display: block;
    }

    &:last-child {
      display: none;
    }
  }
`;
