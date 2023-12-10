import React, { useState } from "react";
import { Grid } from "@mui/material";
import BackgroundImg from "assets/images/curved-images/curved10.jpg";
import DashboardLayout from "layouts/dashboard/DashboardLayout";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";

const Dashboard = () => {
  const [projects] = useState([
    {
      title: "project1",
      image: "https://picsum.photos/200",
      desc: "If everything I did failed.",
      date: "22.11.21",
    },
    {
      title: "project2",
      image: "https://picsum.photos/200",
      desc: "If everything I did failed.",
      date: "22.11.21",
    },
  ]);

  return (
    <>
      <DashboardLayout
        title={`Hi! {name}`}
        description="Creating magic together"
        image={BackgroundImg}
      >
        <Header
          name="You awesome name"
          image={`https://picsum.photos/200`}
          bgImg={BackgroundImg}
        />
        <SoftBox pt={5} pb={2}>
          <Grid container>
            <Grid item xs={12} md={8} sx={{ mx: "auto" }}>
              <SoftBox mb={1}>
                <SoftTypography variant="h5">
                  All your Awesome Projects
                </SoftTypography>
              </SoftBox>
              <SoftBox mb={2}>
                <SoftBox mt={{ xs: 1, lg: 3 }} mb={1}>
                  <Grid container spacing={3}>
                    {projects?.map((project, idx) => (
                      <Grid item xs={12} md={6} lg={4} key={idx}>
                        <ProjectCard
                          image={project.image}
                          title={project.title}
                          description={project.desc}
                          dateTime={project.date}
                          // members={[team1, team2, team3, team4, team5]}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </SoftBox>
              </SoftBox>
            </Grid>
          </Grid>
        </SoftBox>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
