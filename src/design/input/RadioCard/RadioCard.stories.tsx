import { StoryFn } from "@storybook/react";
import { RadioCard, RadioCardProps } from ".";
import { props } from "./props";

import { fondecom } from "@mocks/design/themes/fondecom";
import { ThemeProvider } from "styled-components";

const story = {
  title: "design/input/RadioCard",
  component: [RadioCard],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
};

export const Default: StoryFn<RadioCardProps> = (args) => (
  <RadioCard {...args} />
);
Default.args = {
  id: "storyRadioCard",
  name: "storyRadioCard",
  title: "Compra de vehículo o moto",
  description: "Compra de vehículo nuevo o usado",
  checked: true,
};

const theme = {
  ...fondecom,
};

export const Themed = (args: RadioCardProps) => (
  <ThemeProvider theme={theme}>
    <RadioCard {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
