import { inube } from "@design/tokens";
import styled from "styled-components";

interface IStyledContainer {
  $disabled?: boolean;
  $isFullwidth?: boolean;
}

const StyledContainer = styled.div<IStyledContainer>`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  width: ${({ $isFullwidth }) => ($isFullwidth ? "100%" : "fit-content")};
`;

interface IStyledTextarea {
  $isFullwidth?: boolean;
  $isFocused?: boolean;
  $isMobile?: boolean;
  $disabled?: boolean;
  $required?: boolean;
}

const StyledTextarea = styled.textarea<IStyledTextarea>`
  border-radius: ${`${inube.spacing.s100}`};
  padding: ${() => `${inube.spacing.s100} ${inube.spacing.s150} ${inube.spacing.s100}
    ${inube.spacing.s200}`};
  width: ${({ $isFullwidth }) =>
    $isFullwidth ? "calc(100% - 32px)" : "452px"};
  resize: ${({ $isFullwidth }) => ($isFullwidth ? "none" : "both")};
  height: ${({ $isMobile }) => ($isMobile ? "140px" : "76px")};
  color: ${({ $disabled, theme }) =>
    $disabled
      ? theme?.color?.text?.gray?.disabled || inube.color.text.gray.disabled
      : theme?.color?.text?.dark?.regular || inube.color.text.dark.regular};
  border: 1px solid
    ${({ $disabled, $isFocused, theme }) => {
      if ($disabled) {
        return (
          theme?.color?.stroke?.gray?.disabled ||
          inube.color.stroke.gray.disabled
        );
      }

      if ($isFocused) {
        return (
          theme?.color?.stroke?.primary?.hover ||
          inube.color.stroke.primary.hover
        );
      }
      return (
        theme?.color?.stroke?.divider?.regular ||
        inube.color.stroke.divider.regular
      );
    }};
  ${({ $disabled }) => $disabled && "pointer-events: none; opacity: 0.5;"}

  ::placeholder {
    color: ${({ theme }) =>
      theme?.color?.text?.gray?.regular || inube.color.text.gray.regular};
  }

  &:focus {
    outline: none;
    border-width: 1px;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }

  font-family: ${({ theme }) =>
    theme.typography?.body?.medium?.font || inube.typography.body.medium.font};
  font-size: ${({ theme }) =>
    theme.typography?.body?.medium?.size || inube.typography.body.medium.size};
  font-weight: ${({ theme }) =>
    theme.typography?.body?.medium?.weight ||
    inube.typography.body.medium.weight};
  letter-spacing: ${({ theme }) =>
    theme.typography?.body?.medium?.tracking ||
    inube.typography.body.medium.tracking};
  line-height: ${({ theme }) =>
    theme.typography?.body?.medium?.lineHeight ||
    inube.typography.body.medium.lineHeight};
`;

export { StyledContainer, StyledTextarea };
