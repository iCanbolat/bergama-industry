import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Logo from "../images/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    height: "100%",
    textAlign: "center",
    paddingTop: "5vh",
  },
  [theme.breakpoints.up("xs")]: {
    height: "100%",
    textAlign: "center",
    paddingTop: "5vh",
  },
}));

const Layout = ({ children }) => {
  const history = useNavigate();
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)

  }, [location])

  return (
    <>
      <Typography variant="h6" component="div">
        {children}
      </Typography>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100%", backgroundColor: "#1b1d1f", color: "white" }}
      >
        <Container maxWidth='xl'>
          <Grid container>
            <StyledGrid item xs={12} sm={12} md={4} sx={{marginTop:'-40px'}}>
              <Box
                component="img"
                onClick={() => {history('/');window.scroll(0,0)}}
                sx={{
                  width: "30%",
                  cursor: "pointer",
                  height: "7%",
                  display: { xs: "flex", md: "flex" },
                  marginX: { xs: "auto", sm: "auto"},
                  marginLeft: {md:"40%"}

                }}
                src={Logo}
              ></Box>
              <Box sx={{ textAlign: { sm: "center", md: "start" }, pl: 3, marginLeft: { md:"47%" } }}>
                <FacebookIcon onClick={()=> { window.open('https://mobile.twitter.com/bergamaindustry', '_blank')}} sx={{ cursor: "pointer", mr: 1 }} />
                <TwitterIcon onClick={()=> { window.open('https://mobile.twitter.com/bergamaindustry', '_blank')}} sx={{ cursor: "pointer", mr: 1 }} />
                <YouTubeIcon sx={{ cursor: "pointer" }} />
              </Box>
            </StyledGrid>
            <StyledGrid item xs={6} sm={6} md={2}>
              <Typography sx={{ fontWeight: "bolder" }} gutterBottom>
                Hakkımızda
              </Typography>
              <Link to='/hakkimizda' style={{textDecoration:'none',color:'white'}}>
                <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                  Şirket Profili
                </Typography>
              </Link>
              <Link to='/hakkimizda' style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Etik Davranış Kuralları
              </Typography>
              </Link>
              <Link to='/hakkimizda' style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Vizyon, misyon ve Değerler
              </Typography>
              </Link>
            </StyledGrid>
            <StyledGrid item xs={6} sm={6} md={2}>
              <Typography sx={{ fontWeight: "bolder" }} gutterBottom>
                Faydalı Linkler
              </Typography>
              <Link to='/haberler' style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Haberler
              </Typography>
              </Link>
              <Link to='/kalite-sistemleri' style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Kalite Sistemleri
              </Typography>
              </Link>
              <Link to='/urunler' style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Ürünler
              </Typography>
              </Link>
              <Link to='/iletisim' style={{textDecoration:'none',color:'white'}}>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                İletişim
              </Typography>
              </Link>
            </StyledGrid>
            <StyledGrid item sm={12} md={2}>
              <Typography sx={{ fontWeight: "bolder" }} gutterBottom>
                Fabrika
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Bergama OSB Mahallesi, 3.Cadde, No:1, 35700 Bergama/İzmir
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                (0212) 232 39 39
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                info@bergamaindustry.com
              </Typography>
            </StyledGrid>
            <StyledGrid item sm={12} md={2}>
              <Typography sx={{ fontWeight: "bolder" }} gutterBottom>
                HQ
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }} gutterBottom>
                Ayazağa, Vadistanbul, Azerbaycan Cd. 3B D:1B Blok, 34485
                Sarıyer/İstanbul
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "12px" }}  gutterBottom>
                (0212) 232 39 39
              </Typography>
              <Typography variant="body2"  sx={{ fontSize: "12px" }} gutterBottom>
                info@bergamaindustry.com
              </Typography>
            </StyledGrid>
          </Grid>
        </Container>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 3,
          backgroundColor: "#181a1c",
          color: "white",
        }}
      >
        &copy; {new Date().getFullYear()} Bergama Industry . All Rights
        Reserved.
      </Grid>
    </>
  );
};

export default Layout;
