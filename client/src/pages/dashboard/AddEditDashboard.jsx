import React from "react";
import { Container } from "@mui/material";
import SoftEditor from "components/SoftEditor";
import DashboardLayout from "layouts/dashboard/DashboardLayout";
import SoftBox from "components/SoftBox";
import Header from "./components/Header";
import SoftButton from "components/SoftButton";
import BackgroundImg from "assets/images/curved-images/curved14.jpg";

const AddEditDashboard = () => {
  return (
    <DashboardLayout
      title={`Hi! {name}`}
      description="Creating magic together"
      image={BackgroundImg}
    >
      <Header
        name="Add/Edit your Documentation"
        image={`https://picsum.photos/200`}
        bgImg={BackgroundImg}
      />
      <SoftBox pt={5} pb={2}>
        <Container maxWidth="sm">
          <SoftButton fullWidth variant="gradient" color="info" sx={{ my: 4 }}>
            Add
          </SoftButton>
          <SoftEditor />
          <SoftButton fullWidth variant="gradient" color="info" sx={{ my: 4 }}>
            Add
          </SoftButton>
        </Container>
      </SoftBox>
    </DashboardLayout>
  );
};

export default AddEditDashboard;
