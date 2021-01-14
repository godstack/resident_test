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
  width: 100%;
  cursor: pointer;
  margin: 10px;
  padding: calc(${space} / 1.125) ${space}, ${space};
  border: ${borderSize} solid black;
  color: ${({ isSelected }) => (isSelected ? colorPrimary : colorSecondary)};
  background-color: ${({ isSelected }) =>
    isSelected ? colorSecondary : colorPrimary};
  font-size: 1.5rem;
  font-family: ${fontFamily};
  text-transform: lowercase;
  text-shadow: ${shadow} 2px 2px;

  flex-grow: 1;

  &:hover,
  :focus {
    flex-grow: 1.5;
    color: ${colorPrimary};
    outline: none;
    text-shadow: none;
    background-color: ${colorSecondary};
  }

  &:focus {
    outline: ${borderSize} dashed ${colorPrimary};
    outline-offset: calc(${borderSize} * -3);
  }

  &:nth-child(n + 4) {
    display: none;
  }

  &:last-child {
    display: block;
  }

  @media (min-width: 900px) {
    position: relative;

    &:nth-child(n + 4) {
      display: block;
    }

    &:last-child {
      display: none;
    }
  }
`;
