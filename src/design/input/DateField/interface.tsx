import { Text } from "@design/data/Text";
import { Stack } from "@design/layout/Stack";
import { inube } from "@design/tokens";
import { MdCheckCircle, MdOutlineWarning } from "react-icons/md";
import { Label } from "../Label";
import { ITextFieldMessage } from "../TextField/types";
import {
  StyledContainer,
  StyledErrorMessageContainer,
  StyledInput,
  StyledInputContainer,
  StyledValidMessageContainer,
} from "./styles";

import { DateFieldProps } from ".";

function Invalid(props: ITextFieldMessage) {
  const { isDisabled, state, errorMessage } = props;

  return (
    <StyledErrorMessageContainer isDisabled={isDisabled} state={state}>
      <MdOutlineWarning />
      <Text type="body" size="small" appearance="error" disabled={isDisabled}>
        {errorMessage}
      </Text>
    </StyledErrorMessageContainer>
  );
}

function Success(props: ITextFieldMessage) {
  const { isDisabled, state, validMessage } = props;

  return (
    <StyledValidMessageContainer isDisabled={isDisabled} state={state}>
      <MdCheckCircle />
      <Text type="body" size="small" appearance="success" disabled={isDisabled}>
        {validMessage}
      </Text>
    </StyledValidMessageContainer>
  );
}

interface DateFieldUIProps extends DateFieldProps {
  initialValue?: string;
}

function DateFieldUI(props: DateFieldUIProps) {
  const {
    label,
    name,
    id,
    isDisabled = false,
    max,
    min,
    step,
    value,
    readOnly,
    isRequired,
    errorMessage,
    validMessage,
    isFullWidth = false,
    state = "pending",
    size = "compact",
    initialValue,
    isFocused,
    isTouched,
    onChange,
    onFocus,
    onBlur,
  } = props;

  return (
    <StyledContainer
      isFullWidth={isFullWidth}
      isDisabled={isDisabled}
      readOnly={readOnly}
      $size={size}
    >
      <Stack direction="column" gap="s050">
        <Stack justifyContent="space-between" alignItems="center">
          {(label || isRequired) && (
            <Stack
              width="100%"
              gap="4px"
              alignItems="center"
              padding={`0px 0px 0px ${inube.spacing.s200}`}
            >
              {label && (
                <Label
                  htmlFor={id}
                  isDisabled={isDisabled}
                  isFocused={isFocused && state !== "invalid"}
                  isInvalid={state === "invalid"}
                  size="medium"
                >
                  {label}
                </Label>
              )}

              {isRequired && !isDisabled && (
                <Text type="body" size="small" appearance="dark">
                  (Requerido)
                </Text>
              )}
            </Stack>
          )}
        </Stack>
        <StyledInputContainer
          isDisabled={isDisabled}
          isFocused={isFocused}
          state={state}
          readOnly={readOnly}
        >
          <StyledInput
            id={id}
            name={name}
            type="date"
            min={min}
            max={max}
            step={step}
            isDisabled={isDisabled}
            value={value}
            required={isRequired}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            isFullWidth={isFullWidth}
            readOnly={readOnly}
            $size={size}
          />
        </StyledInputContainer>
      </Stack>

      {state === "invalid" && isTouched && (
        <Invalid
          isDisabled={isDisabled}
          state={state}
          errorMessage={errorMessage}
        />
      )}
      {state === "valid" &&
        value &&
        value.toString().length > 0 &&
        value !== initialValue &&
        isTouched && (
          <Success
            isDisabled={isDisabled}
            state={state}
            validMessage={validMessage}
          />
        )}
    </StyledContainer>
  );
}

export { DateFieldUI };