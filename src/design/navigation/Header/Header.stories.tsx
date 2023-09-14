import { themes } from "@mocks/design/themes";
import { ThemeProvider } from "styled-components";
import { Header, HeaderProps } from ".";
import { props } from "./props";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

const story = {
  title: "design/navigation/Header",
  components: [Header],
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

export const Default = (args: HeaderProps) => <Header {...args} />;
Default.args = {
  logoURL: "http://www.sistemasenlinea.com.co/images/selsalogo-small-grey.png",
  username: "Leonardo Garzón",
  client: "Fondecom",
  links: [
    {
      label: "Actualizar datos",
      path: "/update-data"
    },
  ]
};

const theme = {
  ...themes['fondecom'],
};

export const Themed = (args: HeaderProps) => (
  <ThemeProvider theme={theme}>
    <Header {...args} />
  </ThemeProvider>
);
Themed.args = {
  logoURL:
    "https://fondecom.coop/wp-content/uploads/2022/07/LOGO-GRANDE-1024x305.png",
  username: "Leonardo Garzón",
  links: [
    {
      label: "Actualizar datos",
      path: "/update-data"
    },
  ]
};

export default story;
