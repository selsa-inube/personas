import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { GlobalStyles } from "@design/styles";
import { useFonts } from "@hooks/useFonts";
import { ThemeProvider } from "styled-components";

import { header } from "@config/header";
import { nav } from "@config/nav";
import { theme } from "@config/theme";

import { Page } from "@design/layout/Page";

import { Credit } from "@pages/admin/credits/Credit";
import { CreditMovements } from "@pages/admin/credits/CreditMovements";
import { MyCredits } from "@pages/admin/credits/MyCredits";
import { Investment } from "@pages/admin/investments/Investment";
import { MyInvestments } from "@pages/admin/investments/MyInvestments";
import { Home } from "@pages/admin/home";

function App() {
  useFonts(theme.typography.fonts);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Page header={header} nav={nav} />}>
        <Route path="/" element={<Home />} />
        <Route path="my-credits" element={<MyCredits />} />
        <Route path="my-credits/:credit_id" element={<Credit />} />
        <Route
          path="my-credits/:credit_id/credit-movements"
          element={<CreditMovements />}
        />
        <Route path="my-investments" element={<MyInvestments />} />
        <Route path="my-investments/:product_id" element={<Investment />} />
      </Route>
    )
  );

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
