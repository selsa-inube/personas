import { inube } from "@design/tokens";
import styled from "styled-components";

const StyledMovementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${inube.spacing.s200};
  align-items: flex-end;

  > div {
    width: 100%;
  }
`;

const StyledIconView = styled.div`
  > svg:hover {
    cursor: pointer;
    color: ${({ theme }) =>
      theme.color?.text?.primary?.hover || inube.color.text.primary.hover};
  }
`;

export { StyledIconView, StyledMovementsContainer };
