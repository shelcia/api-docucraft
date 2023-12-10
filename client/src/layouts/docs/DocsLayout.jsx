/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.2
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import PropTypes from "prop-types";

import SoftBox from "components/SoftBox";

import Sidenav from "layouts/common/Sidenav";

import {
  useSoftUIController,
  setMiniSidenav,
  setOpenConfigurator,
  setLayout,
} from "context";

// Images
// import brand from "assets/images/logo-ct.png";

import { Icon } from "@mui/material";
import Configurator from "layouts/common/Configurator";
import { Shop, Dashboard } from "@mui/icons-material";

const DocsLayout = ({ children }) => {
  const { pathname } = useLocation();

  const [controller, dispatch] = useSoftUIController();
  const { miniSidenav, openConfigurator, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  useEffect(() => {
    setLayout(dispatch, "dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const configsButton = (
    <SoftBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.5rem"
      height="3.5rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="default" color="inherit">
        settings
      </Icon>
    </SoftBox>
  );

  const routes = [
    {
      type: "collapse",
      name: "Introduction",
      key: "home",
      icon: <Dashboard size="12px" />,
      collapse: [
        {
          name: "Sign In",
          key: "sign-in",
          collapse: [
            {
              name: "homepage",
              key: "okok",
              route: "/",
            },
          ],
        },
      ],
    },
    {
      type: "collapse",
      name: "Models",
      key: "dashboards",
      icon: <Shop size="12px" />,
      collapse: [
        {
          name: "Default",
          key: "default",
          route: "/docs/:id",
        },
      ],
    },

    { type: "title", title: "APIs", key: "title-pages" },

    {
      type: "collapse",
      name: "Auth",
      key: "docs",
      icon: <Shop size="12px" />,
      collapse: [
        {
          name: "Sign In",
          key: "sign-in",
          collapse: [
            {
              name: "homepage",
              key: "Homepage",
              route: "/",
            },
            {
              name: "login",
              key: "Login",
              route: "/login",
            },
            {
              name: "register",
              key: "Register",
              route: "/register",
            },
            {
              name: "Default",
              key: "default",
              route: "/dashboard",
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Sidenav
        color={sidenavColor}
        // brand={brand}
        brandName="API Docucraft"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      <Configurator />
      {configsButton}
      <SoftBox
        sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
          p: 3,
          position: "relative",

          [breakpoints.up("xl")]: {
            marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
            transition: transitions.create(["margin-left", "margin-right"], {
              easing: transitions.easing.easeInOut,
              duration: transitions.duration.standard,
            }),
          },
        })}
      >
        {children}
      </SoftBox>
    </>
  );
};

// Typechecking props for the DashboardLayout
DocsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DocsLayout;
