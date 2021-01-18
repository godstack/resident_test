import styled from 'styled-components';

export const StyledMain = styled.main`
  position: absolute;
  width: 100%;
  bottom: 0;
  overflow: hidden;
  padding: 20px;
  font-size: 1.2rem;
`;

export const FiltersContainer = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const ClearButton = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  border: 2px solid #e63244;
  border-radius: 20px;
  transition: background-color 0.5s ease;

  &:hover {
    background: #e63244;
    color: white;
  }
`;
