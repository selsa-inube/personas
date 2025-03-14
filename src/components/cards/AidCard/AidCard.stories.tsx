import { ThemeProvider } from "styled-components";
import { AidCard, AidCardProps } from ".";

import { enviroment } from "@config/enviroment";
import { themes } from "@mocks/design/themes";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { props } from "./props";

const story = {
  title: "components/cards/AidCard",
  components: [AidCard],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<AidCardProps> = (args) => <AidCard {...args} />;
Default.args = {
  title: "Hospitalización y cirugía",
};

const theme = {
  ...themes[enviroment.BUSINESS_UNIT],
};

export const Themed: StoryFn<AidCardProps> = (args) => (
  <ThemeProvider theme={theme}>
    <AidCard {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

export default story;
