import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${({ theme }) => theme.COLORS.NEUTRAL.LIGHTEST};
  padding: 6rem 7rem;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const FilterButtonsSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1 0 0;
`;

export const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;

interface FilterButtonProps {
  $selected?: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  display: flex;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  outline: none;
  border-radius: 8px;
  border: 1px solid
    ${({ $selected, theme }) =>
      $selected ? theme.COLORS.PRIMARY : theme.COLORS.NEUTRAL.LIGHT};
  background-color: ${({ $selected, theme }) =>
    $selected ? theme.COLORS.LIGHTBLUE : theme.COLORS.NEUTRAL.LIGHTEST};

  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  color: ${({ $selected, theme }) =>
    $selected ? theme.COLORS.PRIMARY : theme.COLORS.NEUTRAL.DARK};

  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
`;

export const SearchFilter = styled.div`
  display: flex;
  padding: 0.625rem 0.875rem;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  border: 1px solid ${({ theme }) => theme.COLORS.NEUTRAL.LIGHT};
  border-radius: 8px;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const RideGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
