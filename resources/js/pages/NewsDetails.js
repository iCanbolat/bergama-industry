import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Image from "../images/news.png";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../utils/axiosClient";

const ColorButton = styled(Button)({
    borderColor: "grey",
    "&:hover": {
      borderColor: "black",
      backgroundColor:'white',
      color:'black'
    },
  });

const NewsDetails = () => {
  const [data, setData] = React.useState(null);
  const history = useNavigate();
  const { slug } = useParams();

  const getData = async () =>{
    await axiosClient.get(`api/haber/${slug}`).then(res => setData(res.data))
  }


  useEffect(() => {
    getData();
  }, [ ])


  return (
    <>
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

      <Grid container>
        <Container>
          <Grid
            container
            sx={{ minHeight: "30em" , my:3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src={data?.image}
              ></Box>
            </Grid>
            <Grid item md={12}>
              <div
                dangerouslySetInnerHTML={{ __html: data?.title  }}
                style={{textAlign:'center' }}
              ></div>
              <div
                dangerouslySetInnerHTML={{ __html: data?.content  }}
              ></div>
              <Box sx={{width:'100%',textAlign:'center', mt:3}}>
              <ColorButton onClick={() => history('/haberler')} sx={{backgroundColor:'black',textTransform:'capitalize' }} variant="contained" startIcon={<ChevronLeftIcon />}>Haberlere Dön</ColorButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default NewsDetails;
