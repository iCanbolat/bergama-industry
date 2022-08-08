import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginBottom: "15vh",
  },
}));

const StyledTyp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]:{
    textAlign:'center',
    fontSize:'35px'
  },
  [theme.breakpoints.up("md")]:{
    textAlign:'center',
    fontSize:'2.5em'
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

const Boru = () => {
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
              Bergama Endüstri
            </Typography>
            <StyledTyp
              variant="h3"
              sx={{ color: "white", letterSpacing: "2px" }}
              gutterBottom
              component="div"
            >
              Boru Hattı Makaraları
            </StyledTyp>
          </Box>
        </Grid>

        {/* Boru */}
        <Grid container sx={{ minHeight: "29em" }}>
        <Container sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Boru Hattı Makaraları
          </Typography>
          <hr></hr>
          <Grid container>
            <ResponsiveGrid item md={6} sm={12}>
              <AwesomeSlider>
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ps2.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ps4.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ps3.jpg" />
              </AwesomeSlider>
            </ResponsiveGrid>
            <Grid item sx={{ px: 5 }} md={6}>
              <Typography variant="body1">
                Boru makaralarının Shop Prefabrikasyonu, üretilen ürünlerde en
                yüksek kaliteyi sağlarken saha kurulum maliyetlerini düşürmenin
                kanıtlanmış bir yoludur. Boru makaraları, diğer makaralara
                bağlantıyı kolaylaştırmak için genellikle flanşlıdır. Bu
                makaraların imalatı, gerekli altyapıya sahip uzman imalat
                firmaları tarafından yapılmalıdır.<br></br>
                ​Bergama Sanayi, Enerji, Petrol & Gaz ve Kimya Endüstrileri için
                karbon çelik, alaşımlı çelik ve paslanmaz çelik olarak boru
                makaraları üretmektedir.
              </Typography>
              <Typography variant="body1">
                Bileşenler,
                <ul>
                  <li>
                    Karbon Çelikleri, Standart, Düşük Sıcaklık ve İhtisas (A516,
                    A105, A333, LF2, vb.)
                  </li>
                  <li>Paslanmaz Çelik 316/L</li>
                  <li>Paslanmaz Çelik 304/L</li>
                  <li>Paslanmaz Çelikler 321/H, 316H, 304H</li>
                  <li>Duplex UNS 31803, 2205</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{width : '100%', justifyContent:'center',display:'flex',my:3}}>
            <ColorButton onClick={() => history('/urunler')} startIcon={<ChevronLeftIcon/>} variant="contained">Ürünlerimiz</ColorButton>
            </Box>
        </Container>
         </Grid>

      </Grid>
    </>
  )
}

export default Boru