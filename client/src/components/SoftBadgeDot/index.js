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

import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

const SoftBadgeDot = forwardRef(({ variant, color, size, badgeContent, font, ...rest }, ref) => {
  let finalSize;
  let fontSize;
  let padding;

  if (size === "sm") {
    finalSize = "0.5rem";
    fontSize = "caption";
    padding = "0.45em 0.775em";
  } else if (size === "lg") {
    finalSize = "0.625rem";
    fontSize = "body2";
    padding = "0.85em 1.375em";
  } else if (size === "md") {
    finalSize = "0.5rem";
    fontSize = "button";
    padding = "0.65em 1em";
  } else {
    finalSize = "0.375rem";
    fontSize = "caption";
    padding = "0.45em 0.775em";
  }

  const validColors = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ];

  const validColorIndex = validColors.findIndex((el) => el === color);

  return (
    <SoftBox ref={ref} display="flex" alignItems="center" p={padding} {...rest}>
      <SoftBox
        component="i"
        display="inline-block"
        width={finalSize}
        height={finalSize}
        borderRadius="50%"
        bgColor={validColors[validColorIndex]}
        variant={variant}
        mr={1}
      />
      <SoftTypography
        variant={fontSize}
        fontWeight={font.weight ? font.weight : "regular"}
        color={font.color ? font.color : "dark"}
        sx={{ lineHeight: 0 }}
      >
        {badgeContent}
      </SoftTypography>
    </SoftBox>
  );
});

// Setting default values for the props of SoftBadge
SoftBadgeDot.defaultProps = {
  variant: "contained",
  color: "info",
  size: "xs",
  font: {},
};

// Typechecking props of the SoftBadge
SoftBadgeDot.propTypes = {
  variant: PropTypes.oneOf(["contained", "gradient"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  badgeContent: PropTypes.string.isRequired,
  font: PropTypes.shape({
    color: PropTypes.string,
    weight: PropTypes.string,
  }),
};

export default SoftBadgeDot;
