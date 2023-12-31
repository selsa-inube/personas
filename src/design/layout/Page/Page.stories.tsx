import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { themes } from "@mocks/design/themes";
import {
  MdAccountBalanceWallet,
  MdAttachMoney,
  MdFactCheck,
  MdHouse,
  MdOutlineAddCard,
  MdOutlineAirplaneTicket,
} from "react-icons/md";
import { Page, PageProps } from ".";
import { props } from "./props";

const story = {
  title: "design/layout/Page",
  components: [Page],
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    ...props,
  },
};

const defaultArgs = {
  header: {
    logoURL: "http://www.sistemasenlinea.com.co/images/logos/selsalogo2.png",
    username: "Leonardo Garzón",
    client: "Fondecom",
    portalId: "portal",
    logoutPath: "logoutPath",
    logoutTitle: "logoutTitle",
    navigation: {
      title: "navigationTitle",
      sections: [
        {
          title: "Administrate",
          links: [
            { label: "Home", path: "/", icon: <MdHouse /> },
            {
              label: "Accounts",
              path: "/accounts",
              icon: <MdAccountBalanceWallet />,
            },
            { label: "Products", path: "/products", icon: <MdFactCheck /> },
          ],
        },
        {
          title: "Request",
          links: [
            { label: "Credit", path: "/credit", icon: <MdAttachMoney /> },
            { label: "Savings", path: "/savings", icon: <MdOutlineAddCard /> },
            {
              label: "Holidays",
              path: "/holidays",
              icon: <MdOutlineAirplaneTicket />,
            },
          ],
        },
      ],
    },
  },
  nav: {
    sections: [
      {
        title: "Administrate",
        links: [
          { label: "Home", path: "/", icon: <MdHouse /> },
          {
            label: "Accounts",
            path: "/accounts",
            icon: <MdAccountBalanceWallet />,
          },
          { label: "Products", path: "/products", icon: <MdFactCheck /> },
        ],
      },
      {
        title: "Request",
        links: [
          { label: "Credit", path: "/credit", icon: <MdAttachMoney /> },
          { label: "Savings", path: "/savings", icon: <MdOutlineAddCard /> },
          {
            label: "Holidays",
            path: "/holidays",
            icon: <MdOutlineAirplaneTicket />,
          },
        ],
      },
    ],
  },
};

export const Default: StoryFn<PageProps> = (args) => (
  <BrowserRouter>
    <Page {...args} />
  </BrowserRouter>
);
Default.args = defaultArgs;

const themedArgs = {
  ...defaultArgs,
  header: {
    ...defaultArgs.header,
  },
  nav: {
    ...defaultArgs.nav,
  },
};

const theme = { ...themes["fondecom"] };

export const Themed: StoryFn<PageProps> = (args) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Page {...args} />
    </BrowserRouter>
  </ThemeProvider>
);
Themed.args = themedArgs;

export default story;
