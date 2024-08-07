import { inube } from "@design/tokens";
import styled from "styled-components";

interface IStyledTotalPaymentContainer {
  $fixed: boolean;
}

const StyledTotalPaymentContainer = styled.div<IStyledTotalPaymentContainer>`
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s300};
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
  position: ${({ $fixed }) => ($fixed ? "fixed" : "initial")};
  bottom: ${({ $fixed }) => ($fixed ? "43px" : "initial")};
  left: ${({ $fixed }) => ($fixed ? 0 : "initial")};
  right: ${({ $fixed }) => ($fixed ? 0 : "initial")};
  box-sizing: ${({ $fixed }) => ($fixed ? "border-box" : "initial")};
  width: ${({ $fixed }) => ($fixed ? "100%" : "initial")};
  padding: ${({ $fixed }) =>
    $fixed
      ? `${inube.spacing.s050} ${inube.spacing.s300} ${inube.spacing.s300} ${inube.spacing.s300}`
      : "initial"};
`;

const StyledFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${inube.spacing.s200};
  padding: ${inube.spacing.s150} ${inube.spacing.s250};
  border-radius: ${inube.spacing.s100};
  background: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
`;

export { StyledFiltersContainer, StyledTotalPaymentContainer };
