import { inube } from "@design/tokens";
import styled from "styled-components";
import { InputSize } from "./types";

interface IStyledContainer {
  $disabled: boolean;
  $fullwidth: boolean;
  $label?: string;
  $readonly?: boolean;
  $size: InputSize;
}

const StyledContainer = styled.div<IStyledContainer>`
  cursor: ${({ $disabled }) => $disabled && "not-allowed"};
  width: ${({ $fullwidth }) => ($fullwidth ? "100%" : "fit-content")};
  position: relative;
`;

interface IStyledInputContainer {
  $disabled: boolean;
  $isFocused?: boolean;
  $state: string;
  $readonly?: boolean;
}

const StyledInputContainer = styled.div<IStyledInputContainer>`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  user-select: none;
  cursor: ${({ $readonly }) => $readonly && "not-allowed"};
  border-radius: ${inube.spacing.s100};
  padding: ${inube.spacing.s100} ${inube.spacing.s200};
  gap: ${inube.spacing.s100};

  background-color: ${({ theme, $disabled, $readonly }) =>
    ($disabled || $readonly) &&
    (theme.color?.surface?.gray?.clear || inube.color.surface.gray.clear)};

  border: 1px solid
    ${({ theme, $disabled, $state, $isFocused }) => {
      if ($disabled) {
        return (
          (theme.color?.text?.dark?.disabled ||
            inube.color.text.dark.disabled) +
          "; pointer-events: none; opacity: 0.5;"
        );
      }
      if ($state !== "invalid" && $isFocused) {
        return (
          theme.color?.text?.primary?.hover || inube.color.text.primary.hover
        );
      }
      if ($state === "invalid") {
        return (
          theme.color?.text?.danger?.regular || inube.color.text.danger.regular
        );
      }
      return (
        theme.color?.palette?.neutral?.N40 || inube.color.palette.neutral.N40
      );
    }};
`;

interface IStyledInput {
  $disabled: boolean;
  $readonly?: boolean;
  $fullwidth: boolean;
  $size: InputSize;
}

const StyledInput = styled.input<IStyledInput>`
  outline: none;
  cursor: ${({ $readonly }) => $readonly && "not-allowed"};
  font-family: ${({ theme }) =>
    theme.typography?.body?.large?.font || inube.typography.body.large.font};
  font-size: ${({ theme }) =>
    theme.typography?.body?.large?.size || inube.typography.body.large.size};
  font-weight: ${({ theme }) =>
    theme.typography?.body?.large?.weight ||
    inube.typography.body.large.weight};
  letter-spacing: ${({ theme }) =>
    theme.typography?.body?.large?.tracking ||
    inube.typography.body.large.tracking};
  line-height: ${({ theme }) =>
    theme.typography?.body?.large?.lineHeight ||
    inube.typography.body.large.lineHeight};

  color: ${({ theme, $disabled, readOnly }) => {
    if ($disabled) {
      return (
        theme.color?.text?.dark?.disabled || inube.color.text.dark.disabled
      );
    }
    if (readOnly) {
      return theme.color?.text?.gray?.hover || inube.color.text.gray.hover;
    }
    return theme.color?.text?.dark?.regular || inube.color.text.dark.regular;
  }};
  background: ${({ theme, $disabled, readOnly }) =>
    ($disabled || readOnly) &&
    (theme.color?.surface?.gray?.clear || inube.color.surface.gray.clear)};

  border: none;

  width: ${({ $fullwidth }) => ($fullwidth ? "calc(100%)" : "252px")};
  height: ${({ $size }) =>
    $size === "compact" ? `${inube.spacing.s300}` : `${inube.spacing.s400}`};

  ::placeholder {
    color: ${({ theme }) =>
      theme.color?.text?.dark?.disabled || inube.color.text.dark.disabled};
  }

  &:focus {
    outline: none;
    border-width: ${inube.spacing.s025};
  }

  &::-webkit-search-cancel-button {
    display: none;
  }

  &::-moz-search-cancel-button {
    display: none;
  }

  &:-webkit-autofill {
    -webkit-background-clip: text;
    background-clip: text;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  -moz-appearance: textfield;
`;

interface IStyledMessageContainer {
  $disabled?: boolean;
  $state?: string;
}

const StyledErrorMessageContainer = styled.div<IStyledMessageContainer>`
  display: flex;
  align-items: center;
  pointer-events: none;
  gap: ${inube.spacing.s050};
  color: ${({ theme, $disabled, $state }) => {
    if ($disabled) {
      return (
        theme.color?.text?.dark?.disabled || inube.color.text.dark.disabled
      );
    }
    if ($state === "valid") {
      return (
        theme.color?.text?.primary?.regular || inube.color.text.primary?.regular
      );
    }
    if ($state === "invalid") {
      return (
        theme.color?.text?.danger?.regular || inube.color.text.danger.regular
      );
    }
    return theme.color?.text?.dark?.regular || inube.color.text.dark.regular;
  }};
  margin-top: ${inube.spacing.s050};

  & svg {
    width: 14px;
    height: 14px;
    padding-left: ${inube.spacing.s200};
  }
`;

const StyledValidMessageContainer = styled.div<IStyledMessageContainer>`
  display: flex;
  align-items: center;
  pointer-events: none;
  gap: ${inube.spacing.s050};
  color: ${({ theme, $disabled, $state }) => {
    if ($disabled) {
      return (
        theme.color?.text?.dark?.disabled || inube.color.text.dark.disabled
      );
    }
    if ($state === "valid") {
      return (
        theme.color?.text?.success?.regular || inube.color.text.success?.regular
      );
    }
    if ($state === "invalid") {
      return (
        theme.color?.text?.danger?.regular || inube.color.text.danger.regular
      );
    }
    return theme.color?.text?.dark?.regular || inube.color.text.dark.regular;
  }};

  margin-top: ${inube.spacing.s050};

  & svg {
    width: 14px;
    height: 14px;
    padding-left: ${inube.spacing.s200};
  }
`;

export {
  StyledContainer,
  StyledErrorMessageContainer,
  StyledInput,
  StyledInputContainer,
  StyledValidMessageContainer,
};
