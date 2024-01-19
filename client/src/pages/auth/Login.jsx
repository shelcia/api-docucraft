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

import { Link } from "react-router-dom";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

import AuthLayout from "layouts/authentication/AuthLayout";
import BackgroundImg from "assets/images/curved-images/curved10.jpg";
import AuthInputs from "./components/AuthInputs";

import { apiAuth } from "../../services/models/authModel";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e;
    setInputs({ ...inputs, [name]: value });
  };

  const login = () => {
    apiAuth.getSingle("signup").then((res) => {
      console.log(res);
    });
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={BackgroundImg}
    >
      <SoftBox component="form" role="form" sx={{ maxWidth: "400px", margin: "auto" }}>
        <AuthInputs
          name="email"
          type="email"
          placeholder="Email"
          value={inputs.email}
          onChange={() => handleInputs()}
        />
        <AuthInputs
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={() => handleInputs()}
        />
        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            fullWidth
            onClick={() => login()}
            sx={{ width: "100%" }}
          >
            sign in
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/register"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </AuthLayout>
  );
};

export default Login;
