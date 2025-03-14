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
  border-radius: ${inube.spacing.s100};
  border: 1px solid
    ${({ theme }) =>
      theme?.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
`;

const StyledDetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${inube.spacing.s050} ${inube.spacing.s150};
  gap: ${inube.spacing.s100};
  background-color: ${({ theme }) =>
    theme?.color?.surface?.gray?.clear || inube.color.surface.gray.clear};
  border-radius: ${inube.spacing.s100};
`;

export { StyledLogo, StyledCardContainer, StyledDetailsCard };
