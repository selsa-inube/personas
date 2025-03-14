import { inube } from "@design/tokens";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 228px;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${inube.spacing.s150};
  gap: ${inube.spacing.s150};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.light?.clear || inube.color.surface.light.clear};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
`;

export { StyledLogo, StyledCardContainer };