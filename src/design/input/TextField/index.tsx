import { useState } from "react";
import { DropdownItemProps } from "../DropdownItem";
import { TextFieldUI } from "./interface";
import {
  InputSize,
  InputState,
  InputType,
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
  isRequired?: boolean;
  errorMessage?: string;
  validMessage?: string;
  isFullWidth?: boolean;
  readOnly?: boolean;
  isFocused?: boolean;
  type?: InputType;
  state?: InputState;
  size?: InputSize;
  autocomplete?: boolean;
  suggestions?: DropdownItemProps[];
  autocompleteChars?: number;
  lengthThreshold?: number;
  withCounter?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
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
    size,
    value,
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
    readOnly = false,
    autocomplete = false,
    suggestions,
    autocompleteChars,
    lengthThreshold,
    withCounter,
    onChange,
    onFocus,
    onBlur,
    onIconClick,
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const interceptFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!readOnly) {
      setIsFocused(true);
    }
    if (onFocus) onFocus(e);
  };

  const interceptBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  const transformedIsDisabled =
    typeof isDisabled === "boolean" ? isDisabled : false;

  const transformedState = inputStates.includes(state) ? state : "pending";

  const transformedTypes = inputTypes.includes(type) ? type : "text";

  const transformedIsRequired =
    typeof isRequired === "boolean" ? isRequired : false;

  const transformedIsFullWidth =
    typeof isFullWidth === "boolean" ? isFullWidth : false;

  return (
    <TextFieldUI
      label={label}
      name={name}
      id={id}
      placeholder={placeholder}
      isDisabled={transformedIsDisabled}
      type={transformedTypes}
      value={value}
      iconBefore={iconBefore}
      iconAfter={iconAfter}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      isRequired={transformedIsRequired}
      size={size}
      state={transformedState}
      errorMessage={errorMessage}
      validMessage={validMessage}
      isFullWidth={transformedIsFullWidth}
      isFocused={isFocused}
      readOnly={readOnly}
      autocomplete={autocomplete}
      suggestions={suggestions}
      autocompleteChars={autocompleteChars}
      withCounter={withCounter}
      lengthThreshold={lengthThreshold}
      onChange={onChange}
      onFocus={interceptFocus}
      onBlur={interceptBlur}
      onIconClick={onIconClick}
    />
  );
}

export { TextField };
export type { TextFieldProps };
