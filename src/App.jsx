import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { Toaster } from "react-hot-toast";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { customTheme } from "./theme";
const App = () => {
  const allPages = useRoutes(routes);

  const darkTheme = false;

  const toasterOptions = {
    style: {
      fontWeight: 500,
      fontFamily: "'Figtree', sans-serif",
    },
  };

  const appTheme = customTheme({
    theme: darkTheme ? "dark" : "light",
    direction: "ltr",
    // responsiveFontSizes: settings.responsiveFontSizes
  }); // toaster options
  return (
    <React.Fragment>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Toaster toastOptions={toasterOptions} />
          {allPages}
        </ThemeProvider>
      </StyledEngineProvider>
    </React.Fragment>
  );
};

export default App;
