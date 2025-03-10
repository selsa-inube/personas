import { StoryFn } from "@storybook/react";
import { DropdownMenu, DropdownMenuProps } from ".";
import { props } from "./props";

import { enviroment } from "@config/enviroment";
import { themes } from "@mocks/design/themes";
import { ThemeProvider } from "styled-components";

const story = {
  title: "design/input/DropdownMenu",
  component: [DropdownMenu],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
};

export const Default: StoryFn<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args} />
);
Default.args = {
  options: [
    {
      id: "CE995433",
      isFocused: false,
      value: "Crédito educativo - CE995433",
    },
    {
      id: "CL002807",
      isFocused: false,
      value: "Crédito libre inversión - CL002807",
    },
    {
      id: "CL002808",
      disabled: true,
      value: "Crédito libre inversión - CL002808",
    },
  ],
};

const theme = {
  ...themes[enviroment.BUSINESS_UNIT],
};

export const Themed: StoryFn<DropdownMenuProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DropdownMenu {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

export default story;
