import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginBottom: "15vh",
  },
}));

const StyledTyp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    fontSize: "35px",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    fontSize: "2.5em",
  },
}));

const ColorButton = styled(Button)({
  borderColor: "grey",
  backgroundColor:'black',
  color:'white',
  textTransform:'capitalize',
  "&:hover": {
    borderColor: "black",
    backgroundColor:'white',
    color:'black'
  },
});

const Kap = () => {
  const history = useNavigate();
  
  return (
    <>
      <Grid container>
        <Box
          component="div"
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            height: "70%",
            backgroundColor: "#00000047",
          }}
        ></Box>
        <Grid
          item
          md={12}
          style={{
            height: "70vh",
            width: "100%",
            backgroundImage:
              "url(https://cdn-diedp.nitrocdn.com/MtkpqctDrKeXdcxTGYputYNqODjTEBHl/assets/static/optimized/rev-8644acb/wp-content/uploads/2019/05/banner-bg2-Copy.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Custom Header */}
          <Navbar />

          {/* Banner */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
              flexDirection: "column",
              position: "absolute",
              width: "100%",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", letterSpacing: "2px" }}
              gutterBottom
              component="div"
            >
              Bergama End??stri
            </Typography>
            <StyledTyp
              variant="h3"
              sx={{ color: "white", letterSpacing: "2px" }}
              gutterBottom
              component="div"
            >
              Bas??n??l?? Kaplar
            </StyledTyp>
          </Box>
        </Grid>

        {/* Bas??n?? Kap */}
        <Grid container sx={{ minHeight: "29em" }}>
          <Container sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", letterSpacing: "2px" }}
            >
              Bas??n??l?? Kaplar
            </Typography>
            <hr></hr>
            <Grid container>
              <ResponsiveGrid item md={6} sm={12}>
                <AwesomeSlider>
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/pv2.jpg" />
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/pv1.jpg" />
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/pv4.jpg" />
                </AwesomeSlider>
              </ResponsiveGrid>
              <Grid item sx={{ px: 5 }} md={6}>
                <Typography variant="body1">
                  Bas??n??l?? kaplar, end??striyel ve petrokimya proses tesislerinde
                  en ??nemli bile??enlerden biridir. Geni?? anlamda bas??n??l?? kap
                  terimi, ??ok ??e??itli ??nite ??s?? e??anj??rleri, reakt??rler,
                  depolama kaplar??, kolonlar, ay??rma kaplar?? vb. kapsar. Bergama
                  End??stri, uluslararas?? standartlara ve m????teri ??artnamelerine
                  g??re ??e??itli uygulamalar i??in ??ok ??e??itli kaplar ??retmektedir.
                </Typography>
                <Typography variant="body1">
                  <ul>
                    <li>
                      Dahil olmak ??zere ??e??itli bas??n??l?? kaplar. kolonlar,
                      variller ve buharla??t??r??c??lar
                    </li>
                    <li>Adu, Cdu , Vdu</li>
                    <li>Kriyojenik silindirler</li>
                    <li>60 tona kadar, Y??kseklik:4,5m, Geni??lik:7m</li>
                    <li>Kal??nl??k: 40mm</li>
                    <li>Kabuk, Bombeli Plaka, Borular ve aletler</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{width : '100%', justifyContent:'center',display:'flex',my:3}}>
            <ColorButton onClick={() => history('/urunler')} startIcon={<ChevronLeftIcon/>} variant="contained">??r??nlerimiz</ColorButton>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Kap;
