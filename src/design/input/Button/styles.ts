import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { inube } from "../../tokens";
import {
  ButtonAppearanceType,
  ButtonSpacingType,
  ButtonVariantType,
} from "./types";

interface IStyledButtonGeneral {
  $spacing: ButtonSpacingType;
  $fullwidth: boolean;
  $variant: ButtonVariantType;
  $appearance: ButtonAppearanceType;
  $disabled: boolean;
  $load: boolean;
}

interface IStyledSpinnerContainer {
  $variant: ButtonVariantType;
}

interface IStyledButtonContent {
  $load: boolean;
  $disabled: boolean;
}

const StyledButtonGeneral = css<IStyledButtonGeneral>`
  position: relative;
  box-sizing: border-box;

  height: ${({ $spacing }) =>
    $spacing === "wide" ? inube.spacing.s450 : inube.spacing.s350};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "max-content")};
  min-width: 100px;
  max-width: ${({ $fullwidth }) => !$fullwidth && "300px"};

  padding: 0
    ${({ $spacing }) =>
      $spacing === "wide" ? inube.spacing.s200 : inube.spacing.s150};

  cursor: pointer;

  border-radius: 8px;
  border-style: solid;
  border-width: ${({ $variant }) => ($variant === "outlined" ? "1px" : "0px")};
  border-color: ${({ theme, $appearance, $disabled }) => {
    if ($disabled) {
      return (
        theme.color?.stroke?.[$appearance]?.disabled ||
        inube.color.stroke[$appearance].disabled
      );
    }

    return (
      theme.color?.stroke?.[$appearance]?.regular ||
      inube.color.stroke[$appearance].regular
    );
  }};

  background-color: ${({ theme, $appearance, $variant, $disabled }) => {
    if ($variant === "filled") {
      if ($disabled) {
        return (
          theme.color?.surface?.[$appearance]?.disabled ||
          inube.color.surface[$appearance].disabled
        );
      }
      return (
        theme.color?.surface?.[$appearance]?.regular ||
        inube.color.surface[$appearance].regular
      );
    }

    return "transparent";
  }};

  &:hover {
    @media (hover: hover) {
      border-color: ${({ theme, $appearance, $disabled }) => {
        if (!$disabled) {
          return (
            theme.color?.stroke?.[$appearance]?.hover ||
            inube.color.stroke[$appearance].hover
          );
        }
      }};

      background-color: ${({ theme, $appearance, $variant, $disabled, $load }) => {
        if (!$disabled && !$load) {
          if ($variant === "filled") {
            return (
              theme.color?.surface?.[$appearance]?.hover ||
              inube.color.surface[$appearance].hover
            );
          }
        }
      }};
    }

    cursor: ${({ $disabled, $load }) => {
      if ($load || $disabled) {
        return "not-allowed";
      }
    }};
  }

  &:active {
    border-color: ${({ theme, $appearance, $disabled }) => {
      if (!$disabled) {
        return (
          theme.color?.stroke?.[$appearance]?.hover ||
          inube.color.stroke[$appearance].hover
        );
      }
    }};

    background-color: ${({ theme, $appearance, $variant, $disabled, $load }) => {
      if (!$disabled && !$load) {
        if ($variant === "filled") {
          return (
            theme.color?.surface?.[$appearance]?.hover ||
            inube.color.surface[$appearance].hover
          );
        }
      }
    }};
  }
`;

const StyledLink = styled(Link)<IStyledButtonGeneral>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  ${StyledButtonGeneral}
`;

const StyledButton = styled.button<IStyledButtonGeneral>`
  ${StyledButtonGeneral}
`;

const StyledSpinnerContainer = styled.div<IStyledSpinnerContainer>`
  position: absolute;
  height: inherit;
  top: ${({ $variant }) => ($variant === "outlined" ? "-1px" : "0")};
  left: 0;
  right: 0;
`;

const StyledButtonContent = styled.div<IStyledButtonContent>`
  opacity: ${({ $load, $disabled }) => {
    if ($load && !$disabled) {
      return 0;
    }
  }};
`;

export {
  StyledButton,
  StyledButtonContent,
  StyledLink,
  StyledSpinnerContainer,
};
