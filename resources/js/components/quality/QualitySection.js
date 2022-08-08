import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";


const QualitySection = ({ iso, asme, en }) => {
  return (
    <>
      <Grid container sx={{ minHeight: "70vh" }}>
        <Container sx={{ my: 5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Sertifikalarımız
          </Typography>
          <hr></hr>
          <Grid container spacing={4}>
            <Grid item  xs={12} sm={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", letterSpacing: "2px" }}
              >
                ISO
              </Typography>
              <AwesomeSlider style={{height:'25em'}} bullets={false}>
                {iso?.map((item) =>(
                 <div data-src={item} />
                ))}
              </AwesomeSlider>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", letterSpacing: "2px" }}
              >
                ASME
              </Typography>
              <AwesomeSlider style={{height:'25em'}} bullets={false}>
                {asme?.map((item) => (
                 <div data-src={item} />
                ))}
              </AwesomeSlider>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", letterSpacing: "2px" }}
              >
                EN
              </Typography>
              <AwesomeSlider style={{height:'25em'}} bullets={false}>
                {en?.map((item) => (
                 <div data-src={item}/>
                ))}
              </AwesomeSlider>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default QualitySection;
