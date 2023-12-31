const inputTypes = ["text", "email", "number", "password", "search", "tel"];
type InputType = (typeof inputTypes)[number];

const inputSizeTypes = ["wide", "compact"];
type InputSize = (typeof inputSizeTypes)[number];

const inputStates = ["valid", "invalid", "pending"];
type InputState = (typeof inputStates)[number];

interface ITextFieldMessage {
  state?: InputState;
  isDisabled?: boolean;
  errorMessage?: string;
  validMessage?: string;
}

export { inputSizeTypes, inputStates, inputTypes };
export type { ITextFieldMessage, InputSize, InputState, InputType };
