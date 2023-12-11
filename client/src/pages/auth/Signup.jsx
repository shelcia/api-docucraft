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

import { Link, useNavigate } from "react-router-dom";

// import Checkbox from "@mui/material/Checkbox";

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
// import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

import AuthLayout from "layouts/authentication/AuthLayout";

import BackgroundImg from "assets/images/curved-images/curved11.jpg";
import AuthInputs from "./components/AuthInputs";
import { useState } from "react";
import { toast } from "react-toastify";
import { BACKEND_URL } from "services/api";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Register successful! 🎉", { autoClose: 3000 });
        navigate("/login");
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };
  return (
    <AuthLayout
      title="Register"
      description="Enter your email and password to register"
      image={BackgroundImg}
      top={12}
    >
      <SoftBox component="form" role="form" onSubmit={handleSubmit}>
        <AuthInputs
          name="Name"
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <AuthInputs
          name="Email"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <AuthInputs
          name="Password"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          autoComplete="current-password"
        />
        {/* <SoftBox display="flex" alignItems="center">
          <Checkbox checked={agreement} onChange={handleSetAgremment} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetAgremment}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;I agree the&nbsp;
          </SoftTypography>
          <SoftTypography
            component="a"
            href="#"
            variant="button"
            fontWeight="bold"
            textGradient
          >
            Terms and Conditions
          </SoftTypography>
        </SoftBox> */}
        <SoftBox mt={4} mb={1}>
          <SoftButton type="submit" variant="gradient" color="info" fullWidth>
            sign up
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Already have an account?&nbsp;
            <SoftTypography
              component={Link}
              to="/login"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign in
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </AuthLayout>
  );
};

export default Signup;
