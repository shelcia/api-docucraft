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

// @mui material components
import { Grid, Link } from "@mui/material";

// import {
//   IconBrandGithub,
//   IconBrandBehance,
//   IconBrandMedium,
// } from "@tabler/icons-react";

import GithubIcon from "../../../assets/images/icons/github.svg";
import LinkedinIcon from "../../../assets/images/icons/linkedin.svg";
import BehanceIcon from "../../../assets/images/icons/behance.svg";
import MediumIcon from "../../../assets/images/icons/medium.svg";

// Soft UI Dashboard PRO React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function Footer() {
  return (
    <SoftBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={12} lg={8}>
          <SoftBox display="flex" justifyContent="center" mt={1} mb={3}>
            <SoftBox mr={3} color="secondary">
              <Link
                href="https://github.com/shelcia/api-docucraft"
                target="_blank"
              >
                <img
                  src={GithubIcon}
                  alt="github-icon"
                  width={40}
                  height={40}
                />
              </Link>
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <Link href="https://www.linkedin.com/in/shelcia/" target="_blank">
                <img
                  src={LinkedinIcon}
                  alt="linkedin-icon"
                  width={40}
                  height={40}
                />
              </Link>
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <Link href="https://medium.com/@shelcia" target="_blank">
                <img
                  src={MediumIcon}
                  alt="medium-icon"
                  width={40}
                  height={40}
                />
              </Link>
            </SoftBox>
            <SoftBox mr={3} color="secondary">
              <Link href="https://www.behance.net/shelcia/" target="_blank">
                <img
                  src={BehanceIcon}
                  alt="behance-icon"
                  width={40}
                  height={40}
                />
              </Link>
            </SoftBox>
          </SoftBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>
          <SoftTypography variant="body2" color="secondary">
            Pages from Creative Tim. Developed By{"  "}
            <Link href="https://www.shelcia-dev.me/" target="_blank" sx={{}}>
              Shelcia
            </Link>
          </SoftTypography>
        </Grid>
      </Grid>
    </SoftBox>
  );
}

export default Footer;
