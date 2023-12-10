import React, { useEffect } from "react";

import "@fontsource-variable/figtree";

import { Routes, Route, /*Navigate,*/ useLocation } from "react-router-dom";

import { useSoftUIController } from "context";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme/index";
import themeDark from "assets/theme-dark";

import routes from "routes";

const App = () => {
  const { pathname } = useLocation();

  const [controller] = useSoftUIController();

  const { darkTheme } = controller;

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  // console.log(darkTheme);

  return (
    <ThemeProvider theme={darkTheme ? themeDark : theme}>
      <CssBaseline />
      <Routes>{getRoutes(routes)}</Routes>
    </ThemeProvider>
  );
};

export default App;
