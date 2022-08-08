import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import QualitySection from "../components/quality/QualitySection";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import Kalite from "../images/kalite.jpg"
import axiosClient from "../utils/axiosClient";
import { useLocation } from "react-router-dom";

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

const QualitySystem = () => {
    const [data, setData] = React.useState(null);

   const url = useLocation();
   const pageSlug = url.pathname.slice(1);

   const getData = async () => {
    await axiosClient
        .get(`/api/test/${pageSlug}`)
        .then((res) => setData(res.data));
};

useEffect(() => {
    getData();
}, []);

  return (
    <>
        <Grid container>
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000067'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "70vh",
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
              height: "70%",
              position:'absolute',
              width:'100%',
              flexDirection: "column",
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
              Kalite Sistemleri
            </StyledTyp>
          </Box>
        </Grid>

        {/* Product Section */}
        <Grid container sx={{ minHeight: "40vh" }}>
        <Container sx={{ my: 5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Kalite Sistemleri
          </Typography>
          <hr></hr>
          <Grid container>
            <Grid item md={3}>
              <AwesomeSlider  >
                {data?.page[0]?.certificate_side?.map((item) => (
                <div data-src={item} />
                ))}
              </AwesomeSlider>
            </Grid>
            <Grid item sx={{ px: 5 }} md={9}>
              <div
                dangerouslySetInnerHTML={{ __html: data?.page[0]?.content }}
              ></div>
            </Grid>
          </Grid>
        </Container>
        </Grid>

        {/* Products */}
        <QualitySection
            iso={data?.page[0]?.certificate_iso}
            asme={data?.page[0]?.certificate_asme}
            en={data?.page[0]?.certificate_en}
        />

      </Grid>
    </>
  )
}

export default QualitySystem
