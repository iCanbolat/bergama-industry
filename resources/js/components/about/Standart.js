import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../images/endustri.jpg";

const Standart = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      alignItems="center"
      sx={{ minHeight: "80vh", width: "100%" }}
    >
      <Container>
        <Grid container>
          <Grid item sx={{ p: 3 }} md={6}>
            <Typography
              variant="body2"
              sx={{ letterSpacing: "2px",  }}
              gutterBottom
            >
              Bergama Endüstri
            </Typography>
            <hr></hr>
            <Typography variant="body1" >
              Bergama Endüstri için kalite ve standartlar üretim felsefesinin
              vazgeçilmez bir parçası olup her aşamada ilgili standartlara
              uygunluk titizlikle takip edilmekte ve sertifikalandırılmaktadır.<br/><br/>
              Takip edilen standartlar ve sertifikalar.<br/> • ISO 9001, ISO 14001,
              ISO 45001 <br/>• ASME U, ASME U2, ASME S, ASME R <br/>• EN 1090 EXC3 <br/>• ISO
              3834-2 <br/>• CE, as per 2014/68/EU • API 620 & 650 <br/>• IEC 61537 <br/>• NEMA
              VE-1
            </Typography>
          </Grid>
          <Grid item md={6} sx={{p:3}}>
            <Box component="img" sx={{width:'100%', height:'100%'}} src={Image}></Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Standart;
