import { BrowserRouter } from "react-router-dom";
import { BreadcrumbMenu, BreadcrumbMenuProps } from "..";
import { props } from "../props";
import { ThemeProvider } from "styled-components";
import { theme } from "@config/theme";
import { StoryFn } from "@storybook/react";

const story = {
  title: "design/navigation/Breadcrumbs/BreadcrumbMenu",
  components: [BreadcrumbMenu],
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

export const Default: StoryFn<BreadcrumbMenuProps> = (args) => (
  <div style={{ height: "100px", transform: "translateZ(0)" }}>
    <BreadcrumbMenu {...args} />
  </div>
);
Default.args = {
  routes: [
    {
      label: "Privileges",
      path: "/privileges",
      id: "privileges",
    },
    { label: "Users", path: "/users", id: "users" },
    {
      label: "User edition",
      path: "users/edition",
      id: "usersEdition",
    },
  ],
};

export const Themed: StoryFn<BreadcrumbMenuProps> = (args) => (
  <ThemeProvider theme={theme}>
    <BreadcrumbMenu {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
