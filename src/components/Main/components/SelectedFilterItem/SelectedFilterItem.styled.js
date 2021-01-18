import styled from 'styled-components';

export const SvgDiv = styled.div`
  margin-left: 10px;
  width: 10px;
  height: 10px;
  background-image: url(${({ svg }) => svg});
  background-size: cover;
  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  background: ${({ groupName }) => {
    switch (groupName) {
      case 'size':
        return '#E32636';
      case 'color':
        return '#FFFF00';
      case 'room':
        return '#A8E4A0';
      case 'price':
        return '#FAE7B5';
      case 'material':
        return '#ABCDEF';
      case 'construction':
        return '#FF00FF';
      case 'style':
        return '#649A9E';
      default:
        return 'transparent';
    }
  }};
  margin: 10px;
  padding: 2px 7px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: all 0.5s ease;
`;
