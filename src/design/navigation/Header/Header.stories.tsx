import { enviroment } from "@config/enviroment";
import { themes } from "@mocks/design/themes";
import { StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Header, HeaderProps } from ".";
import { props } from "./props";

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

export const Default: StoryFn<HeaderProps> = (args) => <Header {...args} />;
Default.args = {
  logoURL: "http://www.sistemasenlinea.com.co/images/selsalogo-small-grey.png",
  username: "Leonardo Garzón",
  businessUnit: enviroment.CLIENT_NAME,
  links: [
    {
      label: "Actualizar datos",
      path: "/update-data-assisted",
      icon: <MdAndroid />,
    },
  ],
};

const theme = {
  ...themes[enviroment.BUSINESS_UNIT],
};

export const Themed: StoryFn<HeaderProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Header {...args} />
  </ThemeProvider>
);
Themed.args = {
  logoURL: theme.images.logo,
  username: "Leonardo Garzón",
  links: [
    {
      label: "Actualizar datos",
      path: "/update-data-assisted",
      icon: <MdAndroid />,
    },
  ],
};

export default story;
