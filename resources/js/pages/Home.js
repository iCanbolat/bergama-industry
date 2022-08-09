import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  Container,
  Tab,
  Tabs,
} from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Services from "../components/Services";
import Products from "../components/Products";
import Quality from "../components/Quality";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Foto from "../images/fotoo.jpg"
import axiosClient from "../utils/axiosClient";

const ResponsiveAbout = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: "12vh",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "14vh",
  },
  [theme.breakpoints.up("xl")]: {
    marginBottom: "2vh",
  },
}));
const StyledTyp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    fontSize: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    textAlign: "center",
    fontSize: "50px",
  },
}));

const ColorButton = styled(Button)({
  borderColor: "grey",
  "&:hover": {
    borderColor: "black",
    backgroundColor:'black',
    color:'white'
  },
});

const Home = () => {
  const [data, setData] = React.useState(null)
  const [quality, setQuality] = React.useState(null)

  const history = useNavigate();

  const getData = async () => {
    await axiosClient.get('/api/home').then(res => setData(res.data[0]))
    await axiosClient.get('/api/quality').then(res => setQuality(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Grid container>
        <Box sx={{backgroundColor:'#00000069',position:'absolute', width:'100%',height:'100%'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage:
              `url(${data?.banner})`,
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
              height: "100%",
              flexDirection: "column",
              position:'relative'
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white" }}
              gutterBottom
              component="div"
            >
              BERGAMA ENDÜSTRİ

            </Typography>
            <StyledTyp
              variant="h3"
              sx={{ color: "white" }}
              gutterBottom
              component="div"
            >
              BERGAMA INDUSTRY

            </StyledTyp>
          </Box>
        </Grid>
      </Grid>

      {/* About */}
      <ResponsiveAbout sx={{ minHeight: "37em", paddingTop:'7em'  }}>
        <Grid container  >
          <Grid item md={6} sm={12} sx={{ position: "relative", textAlign:{ xs: 'center', md:'unset' } }}>
            <Grid container>
              <Grid item sm={12}>
                <Box
                  component="img"
                  className="responsive1"
                  src={data?.about_images[0]}
                ></Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item sm={12}>
                <Box
                  component="img"
                  className="responsive2"
                  src={data?.about_images[1]}
                ></Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item sm={12}>
                <Box
                  component="img"
                  className="responsive"
                  src={data?.about_images[2]}
                ></Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} alignItems='center' flexDirection="column">
          <div
              variant="body2"
              sx={{ color: "black", lineHeight: "25px" }}
              gutterBottom
              component="div"
              dangerouslySetInnerHTML={{ __html: data?.about_content }}
            ></div>

            <ColorButton
              sx={{
                mt: 4,
                color: "black",
                textTransform: "capitalize",
                px: 5,
                py: 1,

              }}
              onClick={() => {
                history("/hakkimizda");
                window.scroll(0, 0);
              }}
              variant="outlined"
            >
              Hakkımızda
            </ColorButton>
          </Grid>
        </Grid>
      </ResponsiveAbout>

      {/* Hizmetler */}
      <Services data={data?.service_images}/>

      {/* Ürünler */}
      <Products data={data?.product_images} content={data?.product_content} />

      {/* Kalite */}
      <Quality data={quality} />
    </>
  );
};

export default Home;
