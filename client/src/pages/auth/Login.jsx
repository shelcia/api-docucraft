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

import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftButton from "components/SoftButton";

import AuthLayout from "layouts/authentication/AuthLayout";
import BackgroundImg from "assets/images/curved-images/curved10.jpg";
import AuthInputs from "./components/AuthInputs";

// import { apiAuth } from "../../services/models/authModel";
import { useState } from "react";
import { toast } from "react-toastify";
import { BACKEND_URL } from "services/api";

const Login = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const login = async () => {
    const { email, password } = inputs;
    try {
      const response = await fetch(`${BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login Successfull 🎉", { autoClose: 3000 });
        navigate("/");
      } else {
        console.error("Login failed:", data.error || "Unknown error");
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 3000 });
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={BackgroundImg}
    >
      <SoftBox component="form" role="form">
        <AuthInputs
          name="email"
          type="email"
          placeholder="Email"
          value={inputs.email}
          onChange={handleInputs}
        />
        <AuthInputs
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleInputs}
        />
        <SoftBox mt={4} mb={1}>
          <SoftButton variant="gradient" color="info" fullWidth onClick={login}>
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
