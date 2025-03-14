import { enviroment } from "@config/enviroment";
import { themes } from "@mocks/design/themes";
import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { DateField, DateFieldProps } from "..";
import { parameters, props } from "../props";
import { DateFieldController } from "./DateFieldController";

const story = {
  title: "design/input/DateField",
  component: [DateField],
  tags: ["autodocs"],
  parameters,
  argTypes: props,
};

const Default: StoryFn<DateFieldProps> = (args) => (
  <DateFieldController {...args} />
);
Default.args = {
  id: "dateField",
  name: "dateField",
  label: "Date",
  disabled: false,
  max: "2024-03-14",
  min: "2024-01-01",
  step: "1",
  fullwidth: false,
  required: false,
  readonly: false,
  state: "pending",
  size: "compact",
};

const theme = {
  ...themes[enviroment.BUSINESS_UNIT],
};

const Themed: StoryFn<DateFieldProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DateFieldController {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
export { Default, Themed };
