import SoftBox from "components/SoftBox";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";
import React from "react";

const AuthInputs = ({ name = "", type = "text", placeholder = "" }) => {
  return (
    <>
      <SoftBox mb={2} lineHeight={1.25}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            {name}
          </SoftTypography>
        </SoftBox>
        <SoftInput type={type} placeholder={placeholder} />
      </SoftBox>
    </>
  );
};

export default AuthInputs;
