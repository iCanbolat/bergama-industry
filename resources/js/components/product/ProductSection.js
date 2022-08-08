import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

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

const ProductSection = ({ data }) => {
  const history = useNavigate();


  return (
    <>
      {/* Çelik Yapılar */}
      <Grid container sx={{ minHeight: "33em", backgroundColor: "#f8f9f9" }}>
        <Container sx={{ mt:5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Ürünlerimiz
          </Typography>
          <hr></hr>
          <Grid container spacing={2}>
          {data?.map((item) => (
            <Grid item md={3} xs={12}>
              <Card sx={{ minWidth: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={item.image[0]}
                  alt="çelik-yapı"
                />
                <CardContent sx={{ minHeight: "230px" }}>
                  <div
                    style={{
                      textAlign: "center",
                      letterSpacing: "2px",
                      fontWeight: "bolder",
                      marginBottom:'0.3em'
                    }}
                    dangerouslySetInnerHTML={{ __html: item?.title }}
                  ></div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item?.content.slice(0,500) }}
                    style= {{textAlign:'center', fontSize:'13px'}}
                  ></div>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    alignItems: "end",
                    alignContent: "space-between",
                  }}
                >
                  <ColorButton onClick={() => history(`/urunler/${item?.slug}`)} variant="contained" size="small">
                    İncele
                  </ColorButton>
                </CardActions>
              </Card>
            </Grid>

          ))}
       </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ProductSection;
