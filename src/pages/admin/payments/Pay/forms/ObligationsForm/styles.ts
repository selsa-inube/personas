import { inube } from "@design/tokens";
import styled from "styled-components";

interface IStyledTotalPaymentContainer {
  fixed: boolean;
}

const StyledTotalPaymentContainer = styled.div<IStyledTotalPaymentContainer>`
  display: flex;
  flex-direction: column;
  gap: ${inube.spacing.s300};
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
  position: ${({ fixed }) => (fixed ? "fixed" : "initial")};
  bottom: ${({ fixed }) => (fixed ? "45px" : "initial")};
  left: ${({ fixed }) => (fixed ? 0 : "initial")};
  right: ${({ fixed }) => (fixed ? 0 : "initial")};
  box-sizing: ${({ fixed }) => (fixed ? "border-box" : "initial")};
  width: ${({ fixed }) => (fixed ? "100%" : "initial")};
  padding: ${({ fixed }) =>
    fixed
      ? `0 ${inube.spacing.s300} ${inube.spacing.s300} ${inube.spacing.s300}`
      : "initial"};
`;

interface IStyledTotalPayment {
  isMobile: boolean;
}

const StyledTotalPayment = styled.div<IStyledTotalPayment>`
  display: flex;
  padding: ${inube.spacing.s100} ${inube.spacing.s200};
  gap: ${inube.spacing.s150};
  border-radius: ${inube.spacing.s100};
  background: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
  border: 1px solid
    ${({ theme }) =>
      theme.color?.stroke?.divider?.regular ||
      inube.color.stroke.divider.regular};
  width: ${({ isMobile }) => (isMobile ? "100%" : "auto")};
  justify-content: ${({ isMobile }) => (isMobile ? "center" : "left")};
`;

export { StyledTotalPayment, StyledTotalPaymentContainer };
