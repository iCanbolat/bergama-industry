import { Box, Container, Grid, Typography,Button } from "@mui/material";
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
  backgroundColor: "black",
  color: "white",
  textTransform: "capitalize",
  "&:hover": {
    borderColor: "black",
    backgroundColor: "white",
    color: "black",
  },
});

const Isı = () => {
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
              Isı Değiştiriciler
            </StyledTyp>
          </Box>
        </Grid>

        {/* Isı Değiştrici */}
        <Grid container sx={{ minHeight: "29em" }}>
          <Container sx={{ mt: 5 }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", letterSpacing: "2px" }}
            >
              Isı Değiştiriciler
            </Typography>
            <hr></hr>
            <Grid container>
              <ResponsiveGrid item md={6} sm={12}>
                <AwesomeSlider>
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ht1.png" />
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ht2.png" />
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ht4.png" />
                </AwesomeSlider>
              </ResponsiveGrid>
              <Grid item sx={{ px: 5 }} md={6}>
                <Typography variant="body1">
                  Isı eşanjörleri, ısıyı bir ortamdan diğerine aktarmak için
                  kullanılır. Bu ortamlar bir gaz, sıvı veya her ikisinin bir
                  kombinasyonu olabilir. Isı eşanjörleri, ihtiyaç duyulmayan
                  sistemlerden ısıyı yararlı olarak kullanılabilecek diğer
                  sistemlere aktararak bir sistemin enerji verimliliğini
                  iyileştirebilir. Bergama Sanayi, çeşitli tip ve ebatlarda
                  eşanjör üretmektedir.
                </Typography>
                <Typography variant="body1">
                  <ul>
                    <li>U Borulu Eşanjör</li>
                    <li>Sabit borulu Eşanjör</li>
                    <li>Yüzer Borulu Eşanjör</li>
                    <li>Kabuk, Tüp Levha, Boru demetleri</li>
                  </ul>
                  Bergama Endüstri, lehimleme, kaynaklama, dövme dahil olmak
                  üzere ısı eşanjörü yapım sürecinde birden fazla sınıf karbon
                  çeliği ve çelik alaşımlı malzeme kullanır.
                </Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                mb: 3,
              }}
            >
              <ColorButton
                onClick={() => history("/urunler")}
                startIcon={<ChevronLeftIcon />}
                variant="contained"
              >
                Ürünlerimiz
              </ColorButton>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Isı;
