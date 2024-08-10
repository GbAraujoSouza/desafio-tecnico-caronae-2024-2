import styled from 'styled-components';

export const ListContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL.LIGHTEST};
  padding: 6rem 7rem;
`;

export const FilterBar = styled.div`
  display: flex;
`;

export const FilterButton = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
`;

export const RideGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
