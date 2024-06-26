import { inube } from "@design/tokens";
import styled from "styled-components";

const StyledCardContainer = styled.div`
  width: 238px;
  min-width: 238px;
  height: 136px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: ${inube.spacing.s150};
  border-radius: ${inube.spacing.s050};
  background-color: ${({ theme }) =>
    theme.color?.surface?.gray.clear || inube.color.surface.gray.clear};
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) =>
      theme.color?.surface?.gray?.hover || inube.color.surface.gray.hover};
  }
`;

export { StyledCardContainer };
