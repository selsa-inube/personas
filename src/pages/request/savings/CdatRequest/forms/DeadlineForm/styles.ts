import { inube } from "@design/tokens";
import styled from "styled-components";

const StyledInputRadio = styled.input`
  cursor: pointer;
  accent-color: ${({ theme }) =>
    theme.color?.surface?.primary?.regular ||
    inube.color.surface.primary.regular};
  margin: 0;
  margin-bottom: ${inube.spacing.s200};
`;

export { StyledInputRadio };