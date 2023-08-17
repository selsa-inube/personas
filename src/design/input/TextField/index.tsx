import { useState } from "react";
import { TextFieldUI } from "./interface";
import {
  InputType,
  InputSize,
  InputState,
  inputStates,
  inputTypes,
} from "./types";

interface TextFieldProps {
  label?: string;
  name: string;
  id: string;
  placeholder: string;
  isDisabled?: boolean;
  value?: string | number;
  iconBefore?: React.JSX.Element;
  iconAfter?: React.JSX.Element;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  isRequired: boolean;
  errorMessage?: string;
  validMessage?: string;
  isFullWidth?: boolean;
  readOnly?: boolean;
  isFocused?: boolean;
  type?: InputType;
  state?: InputState;
  inputSize?: InputSize;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField(props: TextFieldProps) {
  const {
    label,
    name,
    id,
    placeholder,
    isDisabled = false,
    type = "text",
    state = "pending",
    inputSize,
    value,
    handleChange,
    iconBefore,
    iconAfter,
    maxLength,
    minLength,
    max,
    min,
    isRequired = false,
    errorMessage,
    validMessage,
    isFullWidth = false,
    handleFocus,
    handleBlur,
    readOnly,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const interceptFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setIsFocused(true);
    }
    if (typeof handleFocus === "function") {
      handleFocus(e);
    }
  };

  const interceptBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (typeof handleBlur === "function") {
      handleBlur(e);
    }
  };

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : false;

  const transformedState = inputStates.includes(state) ? state : "pending";

  const transformedTypes = inputTypes.includes(type) ? type : "text";

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : false;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : false;

  const transformedReadOnly = typeof readOnly === "boolean" ? readOnly : false;

  return (
    <TextFieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      type={transformedTypes}
      value={value}
      handleChange={handleChange}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      isRequired={transformedIsRequired}
      inputSize={inputSize}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={transformedIsFullWidth}
      isFocused={isFocused}
      handleFocus={interceptFocus}
      handleBlur={interceptBlur}
      readOnly={transformedReadOnly}
    />
  );
}

export { TextField };
export type { TextFieldProps };
