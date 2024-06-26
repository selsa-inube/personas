import { inube } from "@design/tokens";
import styled from "styled-components";

const StyledMenuContainer = styled.div`
  overflow: hidden;
  border-radius: ${inube.spacing.s100};
  width: 312px;
  box-shadow: 0px 2px 3px 0px #091e4221;
  box-shadow: 0px 6px 10px 4px #091e4221;
  background-color: ${({ theme }) =>
    theme.color?.surface?.light?.clear || inube.color.surface.light.clear};
`;

export { StyledMenuContainer };
