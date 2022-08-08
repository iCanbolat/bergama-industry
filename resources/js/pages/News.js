import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Image from "../images/news.png";
import Navbar from "../components/Navbar";
import NewsCard from "../components/news/NewsCard";
import axiosClient from "../utils/axiosClient";
import { useLocation } from "react-router-dom";

const News = () => {
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
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000047'}}></Box>
      <Grid
        item
        md={12}
        style={{
          height: "70vh",
          width: "100%",
          backgroundImage: "url(" + data?.banner + ")",
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
            position:'absolute',
            width:'100%'
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
          <Typography
            variant="h3"
            sx={{ color: "white", letterSpacing: "2px" }}
            gutterBottom
            component="div"
          >
            Haberler
          </Typography>
        </Box>
      </Grid>

      {/* News */}

      <Grid container sx={{ minHeight: "80vh" }}>
        <Container>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <NewsCard data={data?.page}/>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default News;
