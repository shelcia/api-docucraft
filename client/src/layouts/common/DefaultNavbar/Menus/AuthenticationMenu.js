/* eslint-disable react/prop-types */
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

import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard PRO React example components
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";

// Images
import curved8 from "assets/images/curved-images/curved8.jpg";

function Menu({ collapse, name, mobileMenu }) {
  const [menu, setMenu] = useState(false);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(false);

  return (
    <MenuItem onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Icon sx={{ fontWeight: "bold", ml: "auto" }}>chevron_right</Icon>
      <DefaultNavbarMenu
        placement="right-start"
        open={menu}
        close={closeMenu}
        style={{ paddingLeft: "1.25rem" }}
      >
        {collapse.map(({ key: collapseKey, name: collapseName, route }) => (
          <MenuItem
            component={Link}
            to={route}
            key={collapseKey}
            // eslint-disable-next-line no-restricted-globals
            onClick={mobileMenu ? undefined : close}
          >
            {collapseName}
          </MenuItem>
        ))}
      </DefaultNavbarMenu>
    </MenuItem>
  );
}

function AuthenticationMenu({ routes, open, close, mobileMenu }) {
  const renderAuthenticationMenuRoute = (routeName) =>
    routes.map(({ key, name, collapse }) => {
      let template;

      if (key === routeName && !mobileMenu) {
        template = (
          <Menu collapse={collapse} mobileMenu={mobileMenu} name={name} />
        );
      } else if (key === routeName && mobileMenu) {
        template = (
          <SoftBox key={key} pr={2} mt={0} mb={2}>
            <SoftTypography variant="h6" fontWeight="bold" gutterBottom>
              {name}
            </SoftTypography>
            {collapse.map(({ key: collapseKey, name: collapseName, route }) => (
              <MenuItem
                component={Link}
                to={route}
                key={collapseKey}
                onClick={mobileMenu ? undefined : close}
              >
                {collapseName}
              </MenuItem>
            ))}
          </SoftBox>
        );
      }

      return template;
    });

  const renderMenuContent = (
    <SoftBox display={mobileMenu ? "block" : "flex"}>
      {!mobileMenu && (
        <SoftBox
          width="10rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          borderRadius="lg"
          overflow="hidden"
        >
          <SoftBox
            component="img"
            src={curved8}
            alt="background-image"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
          />
          <SoftBox
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            opacity={0.8}
            bgColor="info"
            variant="gradient"
          />
          <SoftBox position="relative" textAlign="center">
            <SoftBox
              bgColor="white"
              width="3rem"
              height="3rem"
              borderRadius="50%"
              shadow="md"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mx="auto"
              mb={1}
            >
              <Icon
                sx={({
                  functions: { linearGradient },
                  palette: { gradients, transparent },
                }) => ({
                  backgroundImage: `${linearGradient(
                    gradients.info.main,
                    gradients.info.state
                  )} !important`,
                  WebkitBackgroundClip: "text !important",
                  WebkitTextFillColor: `${transparent.main} !important`,
                })}
              >
                star
              </Icon>
            </SoftBox>
            <SoftTypography variant="body1" fontWeight="medium" color="white">
              Explore our utilities pages
            </SoftTypography>
          </SoftBox>
        </SoftBox>
      )}
      <SoftBox py={1} pl={2}>
        {renderAuthenticationMenuRoute("sign-in")}
        {renderAuthenticationMenuRoute("sign-up")}
        {renderAuthenticationMenuRoute("reset-password")}
        {renderAuthenticationMenuRoute("lock")}
        {renderAuthenticationMenuRoute("2-step-verification")}
        {renderAuthenticationMenuRoute("error")}
      </SoftBox>
    </SoftBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of AuthenticationMenu
AuthenticationMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the AuthenticationMenu
AuthenticationMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default AuthenticationMenu;
