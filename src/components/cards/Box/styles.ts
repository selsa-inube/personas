import styled from "styled-components";
import { inube } from "@design/tokens";
import { Link } from "react-router-dom";

const StyledBox = styled.section`
  padding: ${inube.spacing.s200};
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  border-color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;

interface IStyledCollapseIcon {
  collapse: boolean;
}

const StyledCollapseIcon = styled.div<IStyledCollapseIcon>`
  display: flex;
  transition: all 500ms ease;
  transform: ${({ collapse }) =>
    collapse ? "rotate(90deg)" : "rotate(-90deg)"};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items:center;
  gap: ${inube.spacing.s100}
`;

const StyledDivider = styled.hr`
  margin: 0;
  border-style: dashed;
  width: 100%;
  color: ${({ theme }) =>
    theme.color?.stroke?.divider?.regular ||
    inube.color.stroke.divider.regular};
`;

export { StyledBox, StyledCollapseIcon,  StyledLink, StyledDivider };
