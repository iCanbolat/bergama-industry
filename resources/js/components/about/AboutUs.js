import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    marginBottom: "8vh",
    marginTop: "8vh",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
    marginBottom: "8vh",
    marginTop: "8vh",
  },
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    marginBottom: "10vh",
    marginTop: "10vh",
  },
}));

const AboutUs = ({ left, right }) => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      alignItems="center"
      sx={{ minHeight: "50vh", width: "100%" }}
    >
      <Container>
        <Grid container justifyContent="center" flexDirection="row">
          <Divider
            sx={{ backgroundColor: "#e82a2a", width: "2px" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <StyledGrid item lg={5} md={10} xs={12} sx={{ px: 2 }}>

          <div
              dangerouslySetInnerHTML={{ __html: left }}
            ></div>
          </StyledGrid>

          <Divider
            sx={{ backgroundColor: "#e82a2a", width: "2px" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <StyledGrid item lg={5} md={10} xs={12} sx={{ px: 2 }}>
            <div
              dangerouslySetInnerHTML={{ __html: right }}
            ></div>
          </StyledGrid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AboutUs;
